import React from 'react'
import styled from 'styled-components'

// alternative 1:
const ComplexTitle = ({title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline'></div>
    </div>
  )
}
// alternative 2:
// const ComplexTitle = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div className='underline'></div>
//     </div>
//   )
// }

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }
  .title {
    color: blue;
  }
  .box {
    height: 10px;
    border: var(--mainBorder);
  }
`

export default Wrapper
