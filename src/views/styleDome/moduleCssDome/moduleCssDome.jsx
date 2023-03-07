import style from '@/views/styleDome/moduleCssDome/dom.module.css'

const ModuleCssDome = function (props) {
  return(
      <>
        <div className={style.grand}>
          <div className={style.parent}>
            <div className={style.son}></div>
          </div>
        </div>
      </>
  )
}
export default ModuleCssDome
