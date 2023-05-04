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
        icon: fa-headset
      - title: services.sample
        text: services.sample_details
        icon: fa-paper-plane
      - title: services.photos
        text: services.photos_details
        icon: fa-camera-retro
      - title: services.quality
        text: services.quality_details
        icon: fa-gem
      - title: services.transport
        text: services.transport_details
        icon: fa-truck

  - type: portfolio.html
    # this section has always ID 'portfolio'
    section_id: portfolio
    background_style: bg-dark
    projects:
      - title: portfolio.tester_1
        text: portfolio.increase
        icon: 1.jpg
        url: '#'
      - title: portfolio.tester_2
        text: portfolio.increase
        icon: 2.jpg
        url: '#'
      - title: portfolio.tester_3
        text: portfolio.increase
        icon: 3.jpg
        url: '#'
      - title: portfolio.tester_4
        text: portfolio.increase
        icon: 4.jpg
        url: '#'
      - title: portfolio.tester_5
        text: portfolio.increase
        icon: 5.jpg
        url: '#'
      - title: portfolio.tester_6
        text: portfolio.increase
        icon: 6.jpg
        url: '#' 

  - type: contact.html
    section_id: contacts
    title: contacts.title
    text: contacts.text
    actions:
    - title: +48 791 787 881</br> +39 347 770 0501
      icon: fa-phone
    - title: info@mybasia.com
      icon: fa-envelope
      url: mailto:info@mybasia.com
    - title: WhatsApp</br> +39 347 770 0501
      icon: fa-brands fa-whatsapp
      icon_type: fab
    - title: mybasia
      icon: fa-brands fa-instagram
      icon_type: fab
      url: https://www.instagram.com/mybasia/

---
