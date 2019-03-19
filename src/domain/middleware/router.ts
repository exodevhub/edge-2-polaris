import page from "page"

import { getLogger } from "domain/logger"
import { updateCurrentPage } from "domain/store/reducers/main"

type Context = { params: { name: string } }
type OnRoute = (ctx: Context) => void

const logger = getLogger("Middleware/router")

function homeRouter(onRoute: OnRoute) {
  page("/", onRoute)
}
function secondRouter(onRoute: OnRoute) {
  page("/2", onRoute)
}
function thirdRouter(onRoute: OnRoute) {
  page("/3", onRoute)
}
function fourthRouter(onRoute: OnRoute) {
  page("/4", onRoute)
}

export default function startRouters() {
  homeRouter(ctx => {
    logger.debug("Home route")
    updateCurrentPage({ name: "HOME_PAGE" })
  })

  secondRouter(ctx => {
    logger.debug("Document route")
    updateCurrentPage({ name: "SECOND_PAGE" })
  })
  thirdRouter(ctx => {
    logger.debug("Document route")
    updateCurrentPage({ name: "THIRD_PAGE" })
  })
  fourthRouter(ctx => {
    logger.debug("Document route")
    updateCurrentPage({ name: "FOURTH_PAGE" })
  })

  page()
}

export function navigate(route: string, event: any) {
  event.preventDefault()
  page(route)
}
