import React from 'react'
import NotificationItem from '../NotificationItem/NotificationItem'
import classes from './NotificationFeed.module.css'
import apple from '../../../Assets/apple.png'
import google from '../../../Assets/google.png'
import fb from '../../../Assets/fb.png'
import logo3 from '../../../Assets/logo3.jpg'
import logo4 from '../../../Assets/logo4.jpg'
import logo5 from '../../../Assets/logo5.png'
import logo6 from '../../../Assets/logo6.jpg'
import logo7 from '../../../Assets/logo7.jpg'

const DUMMY_NOTI = [
  {
    img: apple,
    id: 'n1',
    content:
      'Apple may be loading the iphone with more ads. Hear the latest news.',
    time: '1h',
    reaction: '1,661 reactions',
    comments: '120 comments',
  },
  {
    img: fb,
    id: 'n2',
    content:
      "Facebook getting into delivery business. Here's the news on the tech giant local focus",
    time: '12h',
  },
  {
    img: logo3,
    id: 'n3',
    content:
      'A post by an employee at Tech Career Growth Community is popular: "The first 10K is the most difficult"-- lets see how many more software engineers we can help',
    time: '12h',
    reaction: '2,533 reactions',
    comments: '42 comments',
  },
  {
    img: logo4,
    id: 'n4',
    content:
      'A post by an employee at Amazon Web Services(AWS) is popular. Our custom designed silicon and chipsa are absolutely cutting edge, way ahead of anyone else',
    time: '1d',
    reaction: '1,661 reactions',
    comments: '120 comments',
  },
  {
    img: logo5,
    id: 'n5',
    content:
      'Cisco was the victim of a cyberattack and ransomware data raid. See more news on the hack',
    time: '1d',
  },
  {
    img: google,
    id: 'n6',
    content:
      'Trending post from Google: Its #BackToSchool Season! What are you looking forward to learning this year?🧐 Whether you are returning to formal education, getting online....',
    time: '1d',
    reaction: '12,661 reactions',
    comments: '198 comments',
  },
  {
    img: logo6,
    id: 'n7',
    content:
      'TCS shared a post: At TCS, we are proud to celebrate the 75th aniversary of Indian Independence.',
    time: '1d',
  },
  {
    img: logo7,
    id: 'n8',
    content:
      'Trending post from Wipro: With more than 19,000 patents, Wipro leverages #engineering innovations to empower organizations, strengthening their competitive edge.',
    time: '2d',
    reaction: '1,961 reactions',
    comments: '150 comments',
  },
  {
    img: apple,
    id: 'n9',
    content:
      'Apple may be loading the iphone with more ads. Hear the latest news.',
    time: '1h',
    reaction: '1,661 reactions',
    comments: '120 comments',
  },
  {
    img: fb,
    id: 'n10',
    content:
      "Facebook getting into delivery business. Here's the news on the tech giant local focus",
    time: '12h',
  },
  {
    img: logo3,
    id: 'n11',
    content:
      'A post by an employee at Tech Career Growth Community is popular: "The first 10K is the most difficult"-- lets see how many more software engineers we can help',
    time: '12h',
    reaction: '2,533 reactions',
    comments: '42 comments',
  },
  {
    img: logo4,
    id: 'n12',
    content:
      'A post by an employee at Amazon Web Services(AWS) is popular. Our custom designed silicon and chipsa are absolutely cutting edge, way ahead of anyone else',
    time: '1d',
    reaction: '1,661 reactions',
    comments: '120 comments',
  },
  {
    img: logo5,
    id: 'n13',
    content:
      'Cisco was the victim of a cyberattack and ransomware data raid. See more news on the hack',
    time: '1d',
  },
  {
    img: google,
    id: 'n14',
    content:
      'Trending post from Google: Its #BackToSchool Season! What are you looking forward to learning this year?🧐 Whether you are returning to formal education, getting online....',
    time: '1d',
    reaction: '12,661 reactions',
    comments: '198 comments',
  },
  {
    img: logo6,
    id: 'n15',
    content:
      'TCS shared a post: At TCS, we are proud to celebrate the 75th aniversary of Indian Independence.',
    time: '1d',
  },
  {
    img: logo7,
    id: 'n16',
    content:
      'Trending post from Wipro: With more than 19,000 patents, Wipro leverages #engineering innovations to empower organizations, strengthening their competitive edge.',
    time: '2d',
    reaction: '1,961 reactions',
    comments: '150 comments',
  },
]

const NotificationFeed = () => {
  return (
    <div className={classes.feed}>
      {DUMMY_NOTI.map(noti => (
        <NotificationItem
          key={noti.id}
          img={noti.img}
          content={noti.content}
          time={noti.time}
          reaction={noti.reaction}
          comment={noti.comments}
        />
      ))}
    </div>
  )
}

export default NotificationFeed
