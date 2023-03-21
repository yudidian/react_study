import {Route, Redirect, Switch} from "react-router-dom"
import { Suspense} from "react"

const RouterView = function (props) {
  const {routers} = props
  return (
      <Switch>
        {
          routers.map((item, index) => {
            if (item.redirect) {
              return(
                  <Redirect key={item.name || index} from={item.form} to={item.to} exact={item.exact}></Redirect>
              )
            } else {
              return <Route key={item.name} path={item.path} name={item.name} render={() => {
                const Component = item.component
                return(
                    <Suspense fallback={<>加载中。。。</>}>
                      <Component></Component>
                    </Suspense>
                )
              }
              }></Route>
            }
          })
        }
      </Switch>
  )
}
export default RouterView
