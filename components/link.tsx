
import NextLink, { LinkProps } from 'next/link'
import { format } from 'url'
import getConfig from 'next/config'

const { basePath } = getConfig()

const Link: React.FunctionComponent<LinkProps> = ({ children, ...props }) => (
  <NextLink
    {...props}
    as={`${basePath || ''}${format(props.href)}`}
  >
    {children}
  </NextLink>
)

export default Link