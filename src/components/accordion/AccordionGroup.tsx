import Accordion, { AccordionProps } from './Accordion'

interface AccordionGroupProps {
  data: AccordionProps[]
}

function AccordionGroup({ data }: AccordionGroupProps) {
  if (data.length == 0) return <></>

  return (
    <>
      {data.map(({ key, ...accordionItem }) => (
        <Accordion key={key} {...accordionItem} />
      ))}
    </>
  )
}

export default AccordionGroup
