import { NextPage } from 'next';
import type { ReactElement } from 'react';
// import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts/Main';

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithPostLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType;

export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement;

export default PageWithLayoutType;
