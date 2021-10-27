(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(13),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Quotes")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"}),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Gmail : anbuhari65@gmail.com")))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://github.com/anbuharry",name:"Hariprasath",role:"Python Fullstack Developer",linkedinId:"https://www.linkedin.com/in/hariprasath-lakshmanan-01b9b8144",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of software development and like to learn about new technologies.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/hariprasath-lakshmanan-01b9b8144",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/anbuharry",className:"fa fa-github"}],aboutme:"My name is Hariprasath , i have more than 2 years Experience\u200c \u200cin\u200c \u200cthe\u200c \u200cSoftware\u200c \u200cindustry\u200c \u200cwith\u200c \u200ca\u200c \u200cwide\u200c \u200crange\u200c \u200cof\u200c \u200cexperience\u200c \u200cin\u200c \u200cIT\u200c \u200cServices\u200c. Experienced\u200c \u200csoftware\u200c \u200cengineer\u200c \u200cwith\u200c \u200ca\u200c \u200cpassion\u200c \u200cfor\u200c \u200cdeveloping\u200c \u200cinnovative\u200c \u200cprograms\u200c \u200cthat\u200c \u200cexpedite\u200c \u200cthe\u200c\u200c effectiveness\u200c \u200cof\u200c \u200corganizational\u200c \u200csuccess. Confident\u200c \u200ccommunicator,\u200c \u200cstrategic\u200c \u200cthinker,\u200c \u200cand\u200c \u200cinnovative\u200c \u200ccreator\u200c \u200cto\u200c \u200cdevelop\u200c \u200csoftware\u200c \u200cand\u200c \u200cfurther\u200c\u200c their\u200c \u200csuccess.\u200c",address:"India",website:"anbuhari65@gmail.com",education:[{UniversityName:"Mahendra Engineering College ,Namakkal",specialization:"B.E Computer Science and Engineering",MonthOfPassing:"Apr",YearOfPassing:"2019",Achievements:"Won the club activity under the scheme of \u201cWEEK OF HUMANITY\u201d , Represented as Main Coordinator of Innovfest 2k19 symposium conducted by CSE Department"}],work:[{CompanyName:"Cognizant Technology Solutions",specialization:"Technical Support Engineer",MonthOfLeaving:"Jun 2019 -",YearOfLeaving:"Jul 2020",Achievements:"Handling\u200c \u200ctickets\u200c \u200cthrough\u200c \u200cBMC\u200c \u200cRemedy\u200c \u200cIT\u200c \u200cservice\u200c \u200cmanagement\u200c \u200cportal.\u200c Installation\u200c \u200cof\u200c \u200cClient\u200c \u200cOperating\u200c \u200cSystems\u200c \u200c\u2013\u200c \u200cwindows\u200c \u200c1709,\u200c \u200cWindows1809, Thin\u200c \u200cOS,\u200c \u200cmacOS\u200c \u200cvia\u200c \u200cWDS\u200c\u200c and\u200c \u200cUSB\u200c \u200cboot. Software\u200c \u200cinstalled\u200c \u200cthrough\u200c \u200cremote\u200c \u200ctools\u200c \u200cand\u200c \u200cmaintaining\u200c \u200cthe\u200c \u200clicense\u200c \u200cfor\u200c \u200capplications.\u200c\u200c"},{CompanyName:"VDA Info Solutions",specialization:"Software Developer",MonthOfLeaving:"Aug 2020 -",YearOfLeaving:"Jan 2021",Achievements:"Assisting\u200c \u200cthe\u200c \u200cdevelopment\u200c \u200cmanager\u200c \u200cwith\u200c \u200call\u200c \u200caspects\u200c \u200cof\u200c \u200csoftware\u200c \u200cdesign\u200c \u200cand\u200c \u200ccoding.\u200c Monitoring\u200c \u200cthe\u200c \u200ctechnical\u200c \u200cperformance\u200c \u200cof\u200c \u200cinternal\u200c \u200csystems.\u200c \u200cGathering\u200c \u200cinformation\u200c \u200cfrom\u200c \u200cconsumers\u200c \u200cabout\u200c \u200cprogram\u200c \u200cfunctionality.\u200c \u200c"},{CompanyName:"\u200cFraction\u200c \u200cAnalytics\u200c \u200cPrivate\u200c \u200cLimited\u200c",specialization:"Full\u200c \u200cStack\u200c \u200cDeveloper",MonthOfLeaving:"Feb 2021 -",YearOfLeaving:"Present ",Achievements:"Developing\u200c \u200cFront\u200c \u200c&\u200c \u200cBack\u200c \u200cend\u200c \u200cwebsite\u200c \u200carchitecture\u200c \u200cand\u200c \u200cEnsuring\u200c \u200cresponsiveness\u200c \u200cof\u200c \u200capplications.\u200c Seeing\u200c \u200cthrough\u200c \u200ca\u200c \u200cproject\u200c \u200cfrom\u200c \u200cconception\u200c \u200cto\u200c \u200cfinished\u200c \u200cproduct.\u200c Gathering\u200c \u200cinformation\u200c \u200cfrom\u200c \u200cconsumers\u200c \u200cabout\u200c \u200cprogram\u200c \u200cfunctionality."}],skillsDescription:"TECHNICAL SKILS :",skills:[{skillname:"PYTHON"},{skillname:"DJANGO"},{skillname:"ANGULAR , REACT JS"}],portfolio:[{name:"Video summarization",description:"Generating\u200c \u200ca\u200c \u200cshort\u200c \u200cvideo\u200c \u200cwith\u200c \u200cinformative\u200c \u200cmaterial\u200c \u200cof\u200c \u200ca\u200c \u200clonger\u200c cctv\u200c \u200cvideo",imgurl:"images/fvsumm.jpeg"},{name:"Anomaly detection in surveillance",description:"Identifies\u200c\u200c \u200cevents \u200cthat\u200c \u200cdeviate\u200c \u200cfrom\u200c \u200ca\u200c \u200c\u200cnormal\u200c \u200cbehavior.\u200c",imgurl:"images/anomaly.jpeg"},{name:"Future invoice",description:"smart invoice scanner",imgurl:"images/invoice.jpeg"},{name:"Resume parser",description:"Analyze most important details from resume",imgurl:"images/resume.jpeg"}],testimonials:[{description:"Strive always to excel in virtue and truth.",name:"Prophet Muhammad"},{description:"Concentrate On Your Goal Do Your Work And Focus Not On The Result.",name:"Bhagavad Gita"},{description:"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",name:"The Bible"}]},N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(p,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(v,{resumeData:b}),l.a.createElement(f,{resumeData:b}),l.a.createElement(g,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.4fe88872.chunk.js.map