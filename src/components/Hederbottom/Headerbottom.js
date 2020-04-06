import React, { useState } from 'react';
import './Headerbottom.css';
import styled, { css } from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NearMeIcon from '@material-ui/icons/NearMe';
import TwitterIcon from '@material-ui/icons/Twitter';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import AnalysisChart from '../Charts/Analysis';
import StatisticsChart from '../Charts/Statistics';
import RadarChart from '../Charts/Radar';
import StatTable from '../Charts/StatTable';
import LinearProgress from '@material-ui/core/LinearProgress';
import Links from '../Links/Links';
import Icon from '@material-ui/core/Icon';
import EditProfile from './EditProfile';
import EditTimeline from './EditTimeline';
import EditWork from './EditWorkExperience';
import EditProject from './EditProjectDesc';
import EditHobbies from './EditHobbies';
import EditLanguages from './EditLanguages';
import EditEducation from './EditEducation';

const CharSectionTwo = styled.section`
    width: 100%;
    height: 360px;
    margin-top: 20px;
    display: flex;
    flex-direction:row;
    padding:10px; 
`
const SkillIndicatorOuter = styled.div`
    padding: 2px;
    border: 2px solid white;
    width: 29px;
    height: 29px;
    border-radius: 100%;
    z-index: 999;
`

const SkillIndicatorInner = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(253, 251, 249);
    border-radius: 50%;
    ${props => props.red && css`
        background-color: red !important;
        z-index: 999;
    `}
`

const Timeline = styled.div`
    position:absolute;
    width:800px;
    height:20px;
    border-radius:10px;
    border: 2px solid red;
    top:885px;
`

const Headerbottom = () => {

    const [personalData, setPersonalData] = useState({
        name: 'John Doe',
        title: 'Art Director',
        telephone: '1234567890',
        email: 'yourname@mail.com',
        address: 'no:2, Street Name, City name, P.O. Box',
        website: 'www.yourwebsite.com',
        description: `Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit abhorreant
        cum. Aeque sonet nostrum usu te. Has ex cibo commodo, ea suas reque
        justo eam. Vel errem viderer saperet cu, modo nihil an cum. Per in falli utroque,
        duo ut inani movet, eam eu mundi lucilius consulatu`,
        twitterAccount: '@youtTwitter',
        instaAccount: '@yourInsta',
        otherAccount: '@yourAccount'
    })

    const [timeline, setTimeline] = useState([{
        icon: 'center_focus_strong',
        year: '2009',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit',
    }, {
        icon: 'sports_basketball',
        year: '2011',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit',
    }, {
        icon: 'flight',
        year: '2015',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit',
    }, {
        icon: 'location_on',
        year: '2016',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit',
    }, {
        icon: 'contacts',
        year: '2019',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit',
    }
    ])

    const [education, setEducation] = useState([{
        title: 'Visual Designer',
        collegeName: 'Art School',
        grade:'S1+',
        from: '2011',
        to: '2014',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit abhorreant cum. Aeque sonet nostrum usu te. Has ex cibo commodo, ea suas reque justo eam.'
    }, {
        title: 'Product Designer',
        collegeName: 'Design University',
        grade:'B1+',
        from: '2016',
        to: '2017',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit abhorreant cum. Aeque sonet nostrum usu te. Has ex cibo commodo, ea suas reque justo eam.'
    },
    ])

    const [workExp, setWorkExp] = useState([{
        title: 'Graphic Designer',
        companyName: 'Company Name',
        from: '2016',
        to: '2017',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit abhorreant cum. Aeque sonet nostrum usu te. Has ex cibo commodo, ea suas reque justo eam.'
    }, {
        title: 'Graphic Designer',
        companyName: 'Company Name',
        from: '2016',
        to: '2017',
        description: 'Lorem ipsum dolor sit amet, an est blandit concludaturque, ex mazim senserit abhorreant cum. Aeque sonet nostrum usu te. Has ex cibo commodo, ea suas reque justo eam.'
    },
    ])

    const [skills, setSkills] = useState([{
        name: 'Web Design',
        skillLevel: 4,
    },{
        name: 'Graphic Design',
        skillLevel: 5,
    },{
        name: 'UI Design',
        skillLevel: 3,
    },
    ])

    const [projectDesc, setProjectDesc] = useState(`Anyone has the ability to search for volunteer opportunities.If you would like to have the option to save the project
    to review or apply to at a later date, or allow program/project sponsors to search for you based on your skill set, then
    create a profile. Those who have already established a profile, can simply login using their
    username and password.Anyone has the ability to search for volunteer opportunities.If you would like to have the option to save
    the project opportunities
    to review or apply to at a later date, or allow program/project sponsors to search for you based on your skill set, then you must
    create a profile. Those who have already established a profile, can simply login using their
    username and password.`)

    const [hobbies, setHobbies] = useState([{
        icon: 'book',
        name: 'Reading',
    },{
        icon: 'sports_basketball',
        name: 'Basketball',
    },{
        icon: 'directions_walk',
        name: 'Hiking',
    },{
        icon: 'music_video',
        name: 'Music',
    },
    ])

    const [languages, setLanguages] = useState([{
        name: 'English',
        skillLevel: 80,
    },{
        name: 'French',
        skillLevel: 65,
    },{
        name: 'Spanish',
        skillLevel: 90,
    },{
        name: 'German',
        skillLevel: 42,
    },
    ])

    const [openedEditor, setOpenedEditor] = useState('none')

    return (
        <div>
            <div className="Maindiv" style={{ maxwidth: '99%', height: "180px", display: 'flex', flexDirection: 'row' }}>
                <div className="imeagediv">
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-fjqTHWrNpg6S8k34ZUQgH2GKUrpPMkwEWI41ykc1d0VagO8S" alt="mdsaif"></img>
                </div>
                <div className="Containtdiv" style={{ display: 'flex', flexDirection: 'column', }}>
                    <table style={{ height: '100%' }}>
                        <tr>

                            <td></td>
                            <td className="bottonD">
                                <button onClick={()=>{setOpenedEditor('profile')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                                <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px' }}>Add</button>
                            </td>

                        </tr>
                        <tr>
                            <td style={{ width: '50px', textAlign: 'end' }}>
                                <div className="Icondiv"><CallIcon fontSize="small" style={{ backgroundColor: 'red', borderRadius: '100%', fontSize: '30px', padding: '5px' }} /> {personalData.telephone} </div>
                            </td>

                            <td style={{ height: '50px', width: '30px' }}>
                                <div className="Icondiv"><MailIcon fontSize="small" style={{ backgroundColor: 'red', borderRadius: '100%', fontSize: '30px', padding: '5px', }} /> {personalData.email} </div>
                            </td>


                        </tr>
                        <tr>
                            <td style={{ width: '50px', textAlign: 'end' }}>
                                <div className="Icondiv" style={{ width: '93%' }}><LocationOnIcon fontSize="small" style={{ backgroundColor: 'red', borderRadius: '100%', fontSize: '30px', padding: '5px' }} /><p style={{ height: '100%', width: '83%', textAlign: 'left' }}>{personalData.address}</p> </div>
                            </td>

                            <td style={{ height: '50px', width: '70px' }}>
                                <div className="Icondiv"><NearMeIcon fontSize="small" style={{ backgroundColor: 'red', borderRadius: '100%', fontSize: '30px', padding: '5px', }} /> {personalData.website} </div>
                            </td>



                        </tr>
                    </table>
                </div>
            </div>
            <div className="textDiv" style={{ marginTop: '20px', color: '#fff' }}>
                <div className="IconD">
                    <h2> {personalData.name} </h2>
                    <h4 className="pragraoh"> {personalData.title} </h4>
                    <br></br>
                    <label>
                        <span><SportsBasketballIcon fontSize="small"></SportsBasketballIcon> {personalData.otherAccount} </span>
                        <span><InstagramIcon fontSize="small" /> {personalData.instaAccount} </span>
                        <span><TwitterIcon fontSize="small" /> {personalData.twitterAccount} </span>

                    </label>
                </div>
                <div className="prag">
                    <br></br>
                    <h3 style={{ fontSize: '18px', lineHeight: '20px' }}>PERSONAL INFORMATION</h3>
                    <p className="pr"> {personalData.description} </p>
                </div>

            </div>
            <section style={{ width: '100%', height: '700px' }}>
                <div className="TopD">
                    <div className="TopD1">
                        <div className="TopR">
                            <h5>TIMELINE</h5>
                            <p><button onClick={()=>{setOpenedEditor('timeline')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                                <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px' }}>Add</button></p>
                        </div>
                    </div>
                    <Grid container className="grigM">
                        <Timeline/>
                        {timeline.map((entry, index) =>
                            <Box className="Box"
                                m={1}
                                p={1}
                                style={{ width: '9rem', height: '10rem', textAlign: 'center' }}>
                                <div style={{backgroundColor:'red', width:60, borderRadius:8}}> {entry.year} </div>
                                <div className='arrow_box'></div>
                                <span className='inst' style={{marginTop:60}}> <Icon fontSize="small" style={{ fontSize: 45}}>{entry.icon}</Icon></span>
                                <p style={{ fontSize: '10px', textAlign: 'left' }}>{entry.description}</p>
                            </Box>
                        )}
                    </Grid>
                </div>

                <div className="BotD">
                    <div className="TopD1">
                        <div className="TopR1">
                            <h5 style={{ borderBottom: '2px solid gray', width: '50%', height: 'auto', textAlign: 'center', paddingBottom: '20px' }}>EDUCATION</h5>
                            <p><button onClick={()=>{setOpenedEditor('education')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                                <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px' }}>Add</button></p>

                        </div>
                    </div>
                    <div className="BotD1">
                        <div className='BotLd'>
                            <label style={{ display: 'flex', alignItems: 'center', height: '20px', width: '100%', fontSize: '15px' }}>
                                <label style={{ width: '10px', height: '10px', borderRadius: '100%', backgroundColor: '#fff', marginRight: '10px' }}></label>
                                <h4 style={{ fontSize: '14px', width: '75%', height: 'auto' }}> {education[0].collegeName} </h4>
                                 GRADE
                                <p style={{ width: '10%', height: '30px', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', marginTop: '20px' }}> {education[0].grade} </p>
                            </label>
                            <span style={{ paddingLeft: '15px' }}>
                                <p style={{ width: '100%', fontSize: '15px ' }}> {education[0].from + " - "+education[0].to+" | "+education[0].title} </p>
                                <p> {education[0].description} </p>
                            </span>
                        </div>
                        <div className='Botrd'>
                            <label style={{ display: 'flex', alignItems: 'center', height: '20px', width: '100%', fontSize: '15px' }}>
                                <label style={{ width: '10px', height: '10px', borderRadius: '100%', backgroundColor: '#fff', marginRight: '10px' }}></label>
                                <h4 style={{ fontSize: '14px', width: '75%', height: 'auto' }}> {education[1].collegeName} </h4>
                            GRADE
                    <p style={{ width: '10%', height: '30px', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', marginTop: '20px' }}>{education[0].grade}</p>
                            </label>
                            <span style={{ paddingLeft: '15px' }}>
                                <p style={{ width: '100%', fontSize: '15px ' }}>  {education[1].from + " - "+education[1].to+" | "+education[1].title} </p>
                                <p> {education[1].description} </p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ width: '100%', height: '300px', marginTop: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                
                <div className="ToplD">
                    <div className="ToplD1">
                        <div className="ToplD2">
                            <p style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>< button onClick={()=>{setOpenedEditor('work')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                                <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px' }}>Add</button></p>
                            <h5 style={{ borderBottom: '2px solid gray', width: '90%', height: 'auto', color: 'tomato' }}>WORK EXPERIENCE</h5>
                            <div style={{ width: '90%', display: 'flex', height: '50%' }}>
                                <span style={{ marginRight: '10px' }}>
                                    <DateRangeIcon className="Deate" />
                                    <DateRangeIcon className="Deate1" />
                                </span>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', color: '#fff' }}>
                                    
                                   {workExp.map((entry, index)=>(
                                       <>
                                   <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                                        <p style={{ display: 'flex', flexDirection: "column", fontSize: '15px', width: '60%', margin: '0px' }}> {entry.companyName}
                                   <sp style={{ fontSize: '13px' }}> {entry.from+"-"+entry.to} </sp>
                                        </p>
                                        <p style={{ float: 'right' }}>{entry.title}</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontSize: '12.3px' }}> {entry.description} </p>
                                    </div>
                                    </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="TopRd">
                    <div style={{ width: '90%', alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: 10 }}>
                        <h4 style={{ paddingBottom: '10px', marginTop: '5px', borderBottom: '1px solid red', width: '20%', color: 'red', textAlign: 'center' }}>SKILLS</h4>
                        {skills.map((skill,index)=>(
                            <div style={{ width: '100%', height: '25%' }}>
                                <p style={{ fontSize: '13px', color: 'red', lineHeight: '10px' }}>{skill.name}</p>
                                <div class="timeline">
                                    <div class={skill.skillLevel>=1? "container" : "container rating-unselect"}>
                                        <SkillIndicatorOuter>
                                            <SkillIndicatorInner red={skill.skillLevel<1} />
                                        </SkillIndicatorOuter>
                                    </div>
                                    <div class={skill.skillLevel>=2? "container" : "container rating-unselect"}>
                                        <SkillIndicatorOuter>
                                            <SkillIndicatorInner red={skill.skillLevel<2} />
                                        </SkillIndicatorOuter>
                                    </div>
                                    <div class={skill.skillLevel>=3? "container" : "container rating-unselect"}>
                                        <SkillIndicatorOuter>
                                            <SkillIndicatorInner red={skill.skillLevel<3} />
                                        </SkillIndicatorOuter>
                                    </div>
                                    <div class={skill.skillLevel>=4? "container" : "container rating-unselect"}>
                                        <SkillIndicatorOuter>
                                            <SkillIndicatorInner red={skill.skillLevel<4} />
                                        </SkillIndicatorOuter>
                                    </div>
                                    <div class={skill.skillLevel>=5? "container" : "container rating-unselect"}>
                                        <SkillIndicatorOuter>
                                            <SkillIndicatorInner red={skill.skillLevel<5} />
                                        </SkillIndicatorOuter>
                                    </div>
                                    <div className='skills-dash'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section style={{ width: '100%', height: '360px', marginTop: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                <div className="OnD">
                    <AnalysisChart />
                    <StatisticsChart />
                </div>
            </section>
            <CharSectionTwo>
                <RadarChart />
                <StatTable />
            </CharSectionTwo>
            <section className="sec" style={{ width: '100%', height: '300px', marginTop: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '10px' }}>

                <div className="OnR">
                    <h2 className="h5" style={{ borderBottom: '2px solid gray' }}>Project Descriptions</h2>
                    <p style={{ display: 'flex', justifyContent: 'flex-end' }}><button onClick={()=>{setOpenedEditor('project')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                        <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px' }}>Add</button></p>
                </div>
                <p style={{ color: "#fff" }} ><FilterCenterFocusIcon style={{ width: "40px", height: "40px", marginRight: "10px" }} />
                    {projectDesc}
                </p>

            </section>
            <section style={{ width: '100%', height: '320px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '10px' }}>

                <div className="Tow">

                    <div className="RD">

                        <p style={{ display: 'flex', height: '25%', float: 'right', width: '100%', justifyContent: "flex-end" }}>  <p style={{
                            marginRight: '20%',
                            borderBottom: '2px solid red', height: '100%', fontSize: '20px'
                        }}
                        >HOBBIES</p><button onClick={()=>{setOpenedEditor('hobbies')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                            <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px!important' }}>Add</button></p>
                        <div style={{ width: '100%', height: '50%', display: "flex", justifyContent: 'center' }}>
                            {hobbies.map((hobby,i)=>(
                                <span style={{ display: 'flex', msFlexDirection: 'column', width: '20%', height: '62%' }}>
                                    <Icon>{hobby.icon}</Icon>{hobby.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="Ld">
                        <p style={{ display: 'flex', height: '25%', width: '100%', justifyContent: "flex-end" }}>
                            <p style={{
                                marginRight: '20%',
                                borderBottom: '2px solid red', height: '100%', fontSize: '20px'
                            }}
                            >
                                LANGUAGES
                        </p>
                            <button onClick={()=>{setOpenedEditor('languages')}} style={{ backgroundColor: "red", borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }}>Edit</button>
                            <button style={{ backgroundColor: "rgb(74, 75, 79)", borderBottomRightRadius: '3px', borderTopRightRadius: '3px!important' }}>Add</button></p>
                        <div style={{ width: '100%', height: '60%', display: "flex", flexWrap: 'wrap', justifyContent: 'space-between', overflowY: 'auto', paddingLeft: 20, paddingRight: 20 }}>
                            {languages.map((lang,i)=>(
                                <div style={{ display: 'flex', width: '50%', height: '42%', alignItems: 'center', justifyContent: 'space-around' }}>
                                    {lang.name}
                                    <LinearProgress variant="determinate" value={lang.skillLevel} color="secondary" style={{ width: '60%' }} />
                                </div>
                            ))}
                            
                        </div></div>
                    {/* <p style={{display:'flex',justifyContent: 'flex-end'}}><button style={{backgroundColor:"red",borderBottomLeftRadius:'3px',borderTopLeftRadius:'3px'}}>Edit</button>
                   <button style={{backgroundColor:"rgb(74, 75, 79)",borderBottomRightRadius:'3px',borderTopRightRadius:'3px'}}>Add</button></p> */}
                </div>

            </section>
            <section style={{ width: '100%', height: '260px', display: 'flex', justifyContent: 'center', padding: '10px', marginBottom: 15 }}>
                <Links />
            </section>
            <EditProfile
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setPersonalData}
                open={openedEditor==='profile'}
                init={personalData}
            />
            <EditTimeline
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setTimeline}
                open={openedEditor==='timeline'}
                init={timeline}
            />
            <EditEducation
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setEducation}
                open={openedEditor==='education'}
                init={education}
            />
            <EditWork
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setWorkExp}
                open={openedEditor==='work'}
                init={workExp}
            />
            <EditProject
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setProjectDesc}
                open={openedEditor==='project'}
                init={projectDesc}
            />
            <EditHobbies
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setHobbies}
                open={openedEditor==='hobbies'}
                init={hobbies}
            />
            <EditLanguages
                handleClose={()=>{setOpenedEditor('none')}}
                handleDataSubmit={setLanguages}
                open={openedEditor==='languages'}
                init={languages}
            />
        </div>
    )
};

export default Headerbottom;

