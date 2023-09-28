import React, { useEffect, useState } from 'react';
import { FooterListData } from './FooterListData';
import { NavLink } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import './Footer.css';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

interface footerData {
  Social_address_link: string;
  Social_address_image: {
    url: string;
  }[];
}

interface FooterListData {
  id:number;
  title: string;
  innerItems: {
    id: number;
    title: string;
    url: string;
  }[];
}

function Footer() {

  const [footerData, setFooterData] = useState<footerData[]>([]);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const { data } = await useFetch.getData('/social-links');
        setFooterData(data);
      } 
      catch(errorMessage:any) {
        console.error("Error Message: "+ errorMessage);
        throw new Error(errorMessage);
      }
    }

    fetchFooterData();
  }, []);

  return (
    <div className='footer-main'>      
      <footer id='footer' className='footer'>
        <div className='footer__holder'>
          <nav className='footer-nav'>
            <div className='footer-top'>
              <div className='footer-top__holder'>
                <ul className='footer-top__list'>
                  {
                    FooterListData.map((listItem, listIndex):any => {
                      const { id, title, innerItems } = listItem;

                      return (
                        <li className='footer-top__item' key={ id }>
                          <div className='top-item__holder'>
                            <h2 className='top-item__title'>{ title }</h2>
                            <ul className='top-item__list'>
                              {
                                innerItems.map((innerListItem, innerListIndex) => {
                                  const { id: innerId, title: innerTitle, url: innerUrl, "link-type": linkType } = innerListItem;
                                
                                  return (
                                    <li className='top-item__innerItem' key={innerId}>
                                      {linkType === 'inner-link' ? (
                                        <NavLink className="top-item__link" to={innerUrl}>
                                          <span>{innerTitle}</span>
                                        </NavLink>
                                      ) : (
                                        <a className="top-item__link" href={innerUrl}>
                                          <span>{innerTitle}</span>
                                        </a>
                                      )}
                                    </li>
                                  );
                                })                                
                              }
                            </ul>
                          </div>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
            <hr className='footer-horizontal-line' />
            <div className='footer-bottom'>
              <div className='container'>
                <div className='footer-bottom__holder'>
                  <ul className='footer-social-links'>
                    {
                      footerData &&
                      footerData.map((socialItem, socialIndex) => {
                        const socialImage = socialItem?.Social_address_image?.[0]?.url;
                        const socialLink = socialItem?.Social_address_link;
                        return (
                          <li className='footer-social-link' key={socialIndex}>
                            <a href={ socialLink }>
                              <span>
                                {socialImage ? (
                                  <img src={`${SERVER_URL}${socialImage}`} alt="" />
                                ) : (
                                  'Image not available'
                                )}
                              </span>
                            </a>
                          </li>
                        );
                      })
                    }
                  </ul>
                  <ul className='footer-bottom__middle'>
                    <li className="fb-middle__item">
                      <NavLink className="fb-middle__link" to={"/terms/privacy-policy"}>
                        <span>Privacy Notice</span>
                      </NavLink>
                    </li>
                    <li className="fb-middle__item">
                      <NavLink className="fb-middle__link" to={"/terms/starbucks-terms-of-use"}>
                        <span>Terms of Use</span>
                      </NavLink>
                    </li>
                    <li className="fb-middle__item">
                      <NavLink className="fb-middle__link" to={"/personal-information"}>
                        <span>Do Not Share My Personal Information</span>
                      </NavLink>
                    </li>
                    <li className="fb-middle__item">
                      <NavLink className="fb-middle__link" to={"https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"}>
                        <span>CA Supply Chain Act</span>
                      </NavLink>
                    </li>
                    <li className="fb-middle__item">
                      <NavLink className="fb-middle__link" to={"/"}>
                        <span>Cookie Preferences</span>
                      </NavLink>
                    </li>
                  </ul>
                  <div className='copyright'>
                    <p>© { (new Date()).getFullYear() } Starbucks Coffee Company. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;