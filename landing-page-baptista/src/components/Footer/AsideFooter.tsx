import { AsideContent } from '../../styles/Footer'

type AsideFooterProps = {
  title1: string;
  title2?: string;
  title3?: string;
  text1?: string;
  text2?: string;
  text3?: string;
}

export default function AsideFooter(props: AsideFooterProps) {
  return (
    <>
    <AsideContent>
        <h2>{props.title1}</h2>
        <p>{props.text1}</p>
        <h3> {props.title2}</h3>
        <p>{props.text2}</p>
        <h3>{props.title3}</h3>
        <p>{props.text3}</p>
    </AsideContent>
    </>
  )
}
