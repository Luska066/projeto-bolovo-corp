import React, { useState } from 'react'
import reactLogo from './assets/img01.webp'
import './App.css'
import Header from './component/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from './component/common/Colors'
import { faDollar, faPlus } from '@fortawesome/free-solid-svg-icons'
import ButtonCoteNow from './component/common/ButtonCoteNow'
import SectionOne from './component/SectionOne/SectionOne'
import SectionTwo from './component/SectionTwo/SectionTwo'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import SectionTree from './component/SectionTree/SectionTree'
import SectionFour from './component/SectionFour/SectionFour'

function App() {
  const [count, setCount] = useState(0)
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <main className='flex flex-col border '>
      <Header styled={{ backgroundColor: 'white', zIndex: 2 }} />
      <SectionOne />
      <SectionTwo />
      <SectionTree />
      <SectionFour />
      <section className='w-full flex flex-col justify-center items-center'>
        <article className='border-t pt-2 w-[55%] rounded-none  border-blue-400 '>
          <Accordion className='border-b border-blue-400' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon size='45' color={Colors().blue} icon={faPlus} />}
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
              expandIcon={<FontAwesomeIcon size='45' color={Colors().blue} icon={faPlus}/>}
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
              expandIcon={<FontAwesomeIcon size='45' color={Colors().blue} icon={faPlus}/>}
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
              expandIcon={<FontAwesomeIcon size='35px' color={Colors().blue} icon={faPlus}/>}
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
      </section>
    </main>
  )
}

export default App
