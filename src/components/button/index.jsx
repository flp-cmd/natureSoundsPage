import { Container } from "./styles.js";

export function Button({icon : Icon, onClick, className}){

  return (
    <Container onClick={()=> onClick()} className={className} >
      {Icon && <Icon/>}
    </Container>
  )
}