import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breakpoints & Media Queries',
};

const BreakpointsAndMediaQueries = () => {
  return <main>{/* Tailwind is mobile-first */}</main>;
};

export default BreakpointsAndMediaQueries;

`
<!-- Breakpoint Classes
    sm	640px	  @media (min-width: 640px) { ... }
    md	768px	  @media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... }
  -->
`;
