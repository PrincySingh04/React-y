import React from 'react'

import { memo } from 'react';
import './App.css'
import Cards from './Cards';
  export const jobsData = [
  {
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Full Time",
    level: "Senior level",
    salary: "$120/hr",
    location: "Mumbai, India",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
  },
  {
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid level",
    salary: "$140/hr",
    location: "Bangalore, India",
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg"
  },
  {
    company: "Microsoft",
    posted: "1 week ago",
    role: "React Developer",
    type: "Full Time",
    level: "Senior level",
    salary: "$135/hr",
    location: "Hyderabad, India",
    logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1"
  },
  {
    company: "Meta",
    posted: "3 days ago",
    role: "UI Engineer",
    type: "Contract",
    level: "Mid level",
    salary: "$150/hr",
    location: "Remote",
    logo: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png"
  },
  {
    company: "Apple",
    posted: "6 days ago",
    role: "iOS UI Designer",
    type: "Full Time",
    level: "Senior level",
    salary: "$160/hr",
    location: "California, USA",
    logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
  },
  {
    company: "Netflix",
    posted: "4 days ago",
    role: "Frontend Engineer",
    type: "Full Time",
    level: "Mid level",
    salary: "$145/hr",
    location: "Los Gatos, USA",
    logo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400"
  },
  {
    company: "Tesla",
    posted: "2 days ago",
    role: "UI/UX Designer",
    type: "Full Time",
    level: "Senior level",
    salary: "$155/hr",
    location: "Texas, USA",
    logo: "https://images.stockcake.com/public/2/e/2/2e2965c4-b64b-40a5-a213-06f56a2b29bd/orbital-tesla-logo-stockcake.jpg"
  },
  {
    company: "Uber",
    posted: "7 days ago",
    role: "React Native Developer",
    type: "Contract",
    level: "Mid level",
    salary: "$130/hr",
    location: "Bangalore, India",
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c916dc6258361.58e3c9c7ebea2.jpg"
  },
  {
    company: "LinkedIn",
    posted: "3 days ago",
    role: "Frontend Engineer",
    type: "Full Time",
    level: "Senior level",
    salary: "$150/hr",
    location: "Remote",
    logo: "https://img.icons8.com/?size=512w&id=446&format=png"
  },
  {
    company: "Adobe",
    posted: "5 days ago",
    role: "Product Designer",
    type: "Full Time",
    level: "Mid level",
    salary: "$140/hr",
    location: "Noida, India",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo-768x432.png"
  }
];


const App = () => {

  return (
    <div className='parent'>
      {jobsData.map(function(elem){
        return <Cards company={elem.company} posted={elem.posted} role={elem.role} type={elem.type} level={elem.level} salary={elem.salary} location={elem.company.location} logo={elem.logo}/>
      })}
       
    </div>
  );
};

export default memo(App);