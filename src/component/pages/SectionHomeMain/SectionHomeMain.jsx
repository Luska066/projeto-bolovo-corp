import React, { useState } from 'react'
import './index.css'
import reactLogo from '..//..//..//assets/img01.webp'
import Header from '../../Layout/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Colors from '../../common/Colors'
import { faDollar, faPlus } from '@fortawesome/free-solid-svg-icons'
import ButtonCoteNow from '../../common/ButtonCoteNow';
import SectionHomeOne from '../SectionHomeOne/SectionHomeOne'
import SectionHomeTwo from '../SectionHometwo/SectionHometwo'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import SectionHomeThree from '../SectionHomeThree/SectionHomeThree'
import SectionHomeFour from '../SectionHomeFour/SectionHomeFour'
import SectionHomeSix from '../SectionHomeSix/SectionHomeSix'
import SectionHomeSeven from '../SectionHomeSeven/SectionHomeSeven'
import Footer from '../../Layout/Footer/Footer'

export default function SectionHomeMain(){
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <main className='flex flex-col border '>
            <Header styled={{ backgroundColor: 'white', zIndex: 2 }} />
            <SectionHomeOne />
            <SectionHomeTwo />
            <SectionHomeThree />
            <SectionHomeFour />
            <section className='w-full flex flex-col justify-center items-center bg-[#ECEEEF] p-6'>
                <h1 className='flex justify-center text-[44px] mb-[30px] pb-3 text-[#23366f] relative title-accordion'>Principais Dúvidas</h1>
                <article className='border-t pt-2 w-[55%] rounded-none  border-blue-400 '>
                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>O seguro possui franquia?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>O seguro possui carência? O que isso significa?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Quais são as opções de cobertura?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-b border-blue-400' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon color={Colors().blue} icon={faPlus}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={`text-[26px] rounded-none shadow-none`}
                        >
                        <Typography fontSize={'24px'} color={Colors().blue} fontWeight={'light'}>Como faço para acionar o seguro?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                </article>
                <div className={`
                    flex items-center justify-center gap-2
                    px-8 py-[12px] mt-6
                    rounded-full
                    font-normal text-[18px] text-white 
                    bg-[${Colors().blue}]
                    `}>
                    <FontAwesomeIcon
                        className='text-[16px]'
                        color={'white'}
                        icon={faChevronRight}
                    />
                    <span>Mais dúvidas</span>
                </div>
            </section>
            <SectionHomeSix/>
            <SectionHomeSeven/>
            <Footer/>
        </main>
    )
}