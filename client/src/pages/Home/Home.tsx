import React, { useState, useEffect } from 'react';
import useFetch from '../../utils/useFetch';

interface homepageData {
  id: number;
  Title: string;
  Description: string;
  Link: string;
  Link_title: string;
}

function Home() {
  const [homepageData, setHomepageData] = useState<homepageData[]>([]);
  
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { data } = await useFetch.getData('/home-sections');
        setHomepageData(data);
      } 
      catch(errorMessage:any) {
        console.error("Error Message: "+ errorMessage);
        throw new Error(errorMessage);
      }
    }

    fetchHomeData();
  }, []);

  return (
    <main className='home-page'>
      {
        homepageData.map((sectionItem, sectionIndex) => {
          const { id, Title, Description, Link, Link_title } = sectionItem;
          return (
            <section className='hp-section' key={ id }>
              <div className='container'>
                <div className='hp-section__holder'>
                  <div className='hp-content__right'>
                    <img src={ Link } alt="" />
                  </div>
                  <div className='hp-content__left'>
                    <div className='hp-left__holder'>
                      <h1>{ Title }</h1>
                      <p>{ Description }</p>
                      <a href="#">{ Link_title }</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      }
      <section className='hp-section'>
        <div className='container'>
          <div className='hp-section__holder'>
            <p>
              *Valid 9/7, 9/14, 9/21, AND 9/28/23 after 12:00 p.m. at participating Starbucks stores in the US. Buy any handcrafted fall drink, and get one of equal or lesser value free ($10 max value). Limit one per member per week. Qualifying drinks include any size hot/iced/blended versions of Pumpkin Spice Latte, Pumpkin Cream Cold Brew, Iced Pumpkin Cream Chai Tea Latte, Chai Tea Latte, Apple Crisp Oatmilk Shaken Espresso, Caramel Apple Spice, and Apple Crisp Oatmilk Macchiato. Adding Pumpkin Cream Cold Foam and/or other fall flavor modifiers to all other drinks does not qualify.
            </p>
            <p>
              Cannot be combined with other offers or discounts. Offer not available through Starbucks Delivers on Uber Eats or DoorDash.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;