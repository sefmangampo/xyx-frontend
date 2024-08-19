import React, { useState, useRef, useEffect } from 'react'
import AccordionIcon from '@assets/icons/collapse.svg'

export interface AccordionProps {
  key: number
  title: string
  content: string
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  const headerStyle: React.CSSProperties = {
    cursor: 'pointer',
    padding: '10px',
    background: '#f0f0f0',
    border: '1px solid #ccc',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const contentStyle: React.CSSProperties = {
    maxHeight: height,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
    padding: isOpen ? '10px' : '0px 10px',
    border: isOpen ? '1px solid #ccc' : 'none',
    borderTop: 'none',
  }

  const iconStyle: React.CSSProperties = {
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }

  return (
    <div>
      <div onClick={toggleAccordion} style={headerStyle}>
        <span>{title}</span>
        <img src={AccordionIcon} alt="Toggle Accordion" style={iconStyle} />
      </div>
      <div ref={contentRef} style={contentStyle}>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Accordion
