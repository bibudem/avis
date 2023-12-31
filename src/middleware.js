import { stackMiddlewares } from '@/middlewares/stackMiddlewares'
import { withCors } from '@/middlewares/withCors'
import { withAuth } from '@/middlewares/withAuth'

export default stackMiddlewares([withAuth, withCors])