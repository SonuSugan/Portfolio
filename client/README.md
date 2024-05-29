# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Playfair+Display&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');

* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Merriweather', serif;
}

:root {
  --yellow: #f5c32c;
  --blue: #25a8f3;
  --blue1: #25a7f3b9;
  --black: #242d49;
  --gray: #788097;
  --blueCard: #ddf8fe;
  --purple: rgb(238 210 255);
  --boxShadow: 2px 2px 2.8px rgba(0, 0, 0, 0.397);
  --orangeCard: rgba(252, 166, 31, 0.45);
  --smboxShadow: -79px 51px 60px rgba(0, 0, 0, 0.08);
  --padding : 0% 3%;
  --padding1 : 0% 4%;
}

.span1{
  /* display: flex; */
  color: var(--black);
  font-weight: bold;
  font-size: 4.5rem;
  /* display: block; */
  margin-bottom: -1rem;
  text-shadow: var(--boxShadow);
}
.span4{
  /* display: flex; */
  color: var(--black);
  /* font-weight: bold; */
  font-size: 2.5rem;
  /* display: block; */
  margin-bottom: -1rem;
  text-shadow: var(--boxShadow);
}

.span2 {
  color: var(--blue);
  font-weight: bold;
  font-size: 5rem;
  text-shadow: var(--boxShadow);
}

.span3 {
  font-weight: 100;
  font-size: 14px;
  color: var(--gray);
  margin-top: 8px;
  text-align: justify;
  line-height: 20px;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

.btn{
  background-image: linear-gradient(-180deg, #6abff0 0%, #25a8f3 100%);
  border-radius: 25px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: 200px;
  height: 40px;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:hover{
  background-image: linear-gradient(-180deg, #25a8f3 0%, #6abff0 100%);
}

.nav-center {
  background: linear-gradient(-180deg,rgba(0, 0, 0, 0.233) ,rgba(175, 173, 173, 0.123));     
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-size: 2rem;
  font-weight: bold;
}

.list {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

li {
  color: var(--black);
  gap: 1rem;
  padding: 5% 0%;
  font-size: 1.3rem;
}

ul>:hover {
  cursor: pointer;
  color: var(--blue);
}

.button {
  display: none;
}

/* hero section  */

.Hero-center{
  padding: var(--padding1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  height: 100vh;
  margin-top: 5rem;
  gap: 2rem;
}

.Hero-intro{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 3%;
  
}

.social-icon {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.social-icon > * {
  transform: scale(1.3);
}

.social-icon > *:hover {
  cursor: pointer;
}

.button-class{
  display: flex;
  justify-content: center;
}

.Hero-boy{
  justify-content: center;
  align-items: center;
  text-align: center;
}
.Hero-boy > img{
  max-width: 100%;
}

.Skill-center{
  padding: var(--padding1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 5rem;
}


.card-container {
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  border: 7px solid var(--blue);
  border-radius: 20px;
  padding: 0px 26px 2rem 26px;
  
}

.card-data img{
  width: 100px;
  height: 100px;
}

.card-data{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.card-center{
display: flex;
gap: 2rem;

}

.card-data1{
  /* white-space: nowrap; */
  display: flex;
  /* animation: 20s slider infinite linear; */
  gap: 2rem;
}
.Skill-card{
  display: inline-block;
  /* white-space: nowrap; */
  /* background-color: #25a8f3; */
  /* background: #25a8f3; */
  /* position: relative; */
  overflow: hidden;

}

.Work-center{
  padding: var(--padding1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  height: 50vh;
  margin-top: 5rem;
  gap: 1rem;
}

.Work-detail{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 3%;
}

.Work-icon{
  display: flex;
  justify-content: center;
  align-items: center;
}

.Work-icon img {
  max-width: 60%;
  max-height: 60%;
}

.Pro-center{
  padding: var(--padding1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  height: 60vh;
  margin-top: 5rem;
  gap: 1rem;
}

.Pro-detail{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 3%;
}

.Pro-vedio{

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
}

.contact-center{
  padding: var(--padding1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  height: 50vh;
  margin-top: 5rem;
  gap: 1rem;
}

.contact-right {
  /* display: flex; */
  justify-content: center;
  /* position: relative; */
  /* flex: 1; */
  /* margin-left: 5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.text {
  display: flex;
  flex-direction: column;
}
.contact-det{

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 3%;
}

.contact-right > form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.user {
  width: 25rem;
  height: 2rem;
  padding: 0.3rem;
  outline: none;
  border: 2px solid var(--blue);
  border-radius: 8px;
  font-size: 16px;
}

.textarea {
  height: 4rem !important;
}

.contact {
  display: flex;
  flex-direction: column;
  /* margin-left: 5rem; */
  margin-bottom: 10rem;
  margin-top: 2rem;
}

@media only screen and (min-width: 300px) and (max-width: 930px) {
  .list {
    display: none;
  }
  .Hero-center{
    /* margin-bottom: 50rem; */
    margin-top: 10rem;
  }

    .button {
    display: block;
    border: none;
    background-color: transparent;
    color: var(--black);
    font-size: 1.2rem;
  }
  .list {
    display: flex;
    flex-direction: column;
    position: relative;
    right: -100%;
    top: 100%;
    width: 100%;
    height: 100vh;
    transition: all 1s ease-in-out;
    /* text-align: center; */
    justify-content: flex-start;
    gap: 1rem;
    padding: 5% 0%;
    font-weight: 800;
    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.021) , rgba(0, 0, 0, 0.233));     
  }

 
  .Hero-center{
    display: flex;
    flex-direction: column-reverse;
  }
  .Work-center{
    display: flex;
    flex-direction: column;
    /* flex-direction: column-reverse; */
  }
}

.list.show {
  /* position: absolute; */
  right: -10%;
  top: 100%;
  /* background-color: var(--blue1); */
}



@media only screen  and (max-width:480px){
  .Hero-center{
    /* margin-bottom: 50rem; */
    margin-top: 15rem;
  }
 .span1{
    font-size: 3.5rem;
    /* margin-bottom: 1px; */
    
  }
  
  .span2 {
    font-size: 3.5rem;
  }
  
  .span3 {
    font-size: 12px;
  }
  .social-icon > * {
    transform: scale(1);
  }
  .card-data1{
    animation: 30s slidery infinite linear;
    
  }
  .card-center{
    display: flex;
    flex-direction: column;
  }
  .card-data1{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    max-height: auto;
  }
  .Skill-card{
    display: inline-block;
  }
  .card-center{
    display: flex;
    
    }
}

@keyframes slider {
  from {
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
}
@keyframes slidery {
  from {
    transform: translatey(0);
  }
  to{
    transform: translatey(-100%);
  }
}



#   P o r t f o l i o  
 