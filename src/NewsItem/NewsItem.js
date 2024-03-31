import style from './NewsItem.module.css'

export function NewsItem(props) {
  return (
    <div className={style.container}>
      <a className={style.link} href="www.example.com">{props.title}</a>
      <div className={style.info}>
        <div className={style.userData}>
          <span>{props.username}</span>
          <span>{props.data}</span>
        </div>
        <div className={style.score}>
          {props.score} point
        </div>
      </div>
    </div>
  )
}