---
layout: home
header:
  title: main.top_text
  text: main.bottom_text
  action:
    label: main.more
    url: '#about'


sections:
  - type: about.html
    section_id: about
    background_style: bg-primary
    title: about.title
    text: about.details
    actions:
      - title: Get Started!
        url: '#page-top'
        class: btn-light

  - type: services.html
    section_id: services
    #background_style: bg-info
    title: services.title
    services:
      - title: services.support
        text: services.support_details
        icon: fa-regular fa-headset
      - title: services.sample
        text: services.sample_details
        icon: fa-regular fa-paper-plane
      - title: services.photos
        text: services.photos_details
        icon: fa-regular fa-camera-retro
      - title: services.quality
        text: services.quality_details
        icon: fa-regular fa-gem
      - title: services.order
        text: services.order_details
        icon: fa-regular fa-cart-plus
      - title: services.transport
        text: services.transport_details
        icon: fa-regular fa-truck

  - type: portfolio.html
    # this section has always ID 'portfolio'
    section_id: portfolio
    background_style: bg-dark
    projects:
      - title: Project 1
        text: This is a very short project description.
        # the images are located in:
        # img/portfolio/fullsize
        # img/portfolio/thumbnails
        icon: 1.jpg
        url: '#'
      - title: Project 2
        text: This is a very short project description.
        icon: 2.jpg
        url: '#'
      - title: Project 3
        text: This is a very short project description.
        icon: 3.jpg
        url: '#'
      - title: Project 4
        text: This is a very short project description.
        icon: 4.jpg
        url: '#'
      - title: Project 5
        text: This is a very short project description.
        icon: 5.jpg
        url: '#'
      - title: Project 6
        text: This is a very short project description.
        icon: 6.jpg
        url: '#' 

  - type: timeline.html
    section_id: timeline
    title: Major Achievements!
    background_style: bg-dark text-primary
    last_image: assets/img/timeline-end.png
    actions:
      - image: assets/img/portfolio/thumbnails/1.jpg
        title: >+
          2017-2018
          **Humble Beginnings**
        text: >-
          We begun with small group of people willing to work hard and make our
          teaching skills worth , in front of all others!
      - image: assets/img/portfolio/thumbnails/2.jpg
        title: >+
          November 2019
          An Coaching started
        text: >-
          We started to gather like minded people and started our stategies
          and future plans to them. As a result , interested people joined us!

  - type: contact.html
    section_id: contacts
    title: Let's Get In Touch!
    text: >-
      Ready to start your next project with us? Give us a call or send us an email
      and we will get back to you as soon as possible!
    actions:
    - title: +1 (202) 555-014
      icon: fa-phone
    - title: E-Mail
      icon: fa-envelope
      url: mailto:contact@yourwebsite.com
    - title: Twitter
      icon: fa-twitter
      icon_type: fab
      url: '#'
    - title: Facebook
      icon: fa-facebook
      icon_type: fab
      url: '#'

---
