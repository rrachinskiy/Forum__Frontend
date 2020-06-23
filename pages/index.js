import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import Sectionsbox from '../components/Sectionsbox';
import Link from 'next/link';
import Title from '../components/Title';
import fetch from 'node-fetch';

export default function ({ data }) {

  return (
    <>
      <Title title="Головна" />
      <style jsx>{`
              section {
                  width: 100%;
                  float: left;
                  margin-bottom: 9px;
              }

              @media (max-width: 992px) {
                  section {
                      float: none;
                      width: 98%;
                  }
              }

              .section {
                  display: flex;
              }

              .section:hover {
                  background-color: rgba(0,0,0, 0.1);
              }

              .section__icon {
                  width: 30px;
                  margin-left: 15px;
                  margin-top: 5px;
              }

              .section__icon img {
                  width: 24px;
                  padding-bottom: 5px;
              }

              .section__info {
                  width: 90%;
                  height: 100%;
                  margin-left: 7px;
                  margin-top: 8px;
              }

              .section-link {
                  color: #313131;
                  text-decoration: none;
                  display: block;
                  font-weight: bold;
              }

              .sections-link span {
                  display: inline-block;
                  margin-top: 10px;
              }
          `}</style>
      <section>
        <Sectionsbox boxTitle="Розділи">
          {
            data?.sections?.map(section => {
              return (
                <Link key={section.id} href='/section/[id]' as={`/section/${section.id}`}>
                  <a key={section.id} className="section-link">
                    <div className="section">
                      <div className="section__icon">
                        <img src="/section-icon.png" alt="Іконка для розділу" />
                      </div>
                      <div className="section__info">
                        <span>{section.title}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            }) || "Розділи відсутні"
          }
        </Sectionsbox>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  let res;
  try {
    res = await fetch(`${process.env.api}/post/section`);
  } catch (err) {
    return { props: { data: { sections: [] } } }
  }
  const data = await res.json();
  return { props: { data } }
}