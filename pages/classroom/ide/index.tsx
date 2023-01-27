/* External dependencies */
import { unstable_getServerSession } from 'next-auth/next';
import React from 'react';

/* Local dependencies */
import IDE from '../../../components/ide/IDE';
import ClassroomLayout from '../../../components/layout/ClassroomLayout';
import { ExtendedSession } from '../../../types/userTypes';
import { authOptions } from '../../api/auth/[...nextauth]';

export async function getServerSideProps(context: any) {
  // TODO(murat): move this to a helper
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );

  const extSession = session as unknown as ExtendedSession;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  const response = await fetch(baseUrl + 'v1/user/tracks/1/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${extSession.access}`,
    },
  });

  return {
    props: {
      // TODO(murat): check for error messages
      data: await response.json(),
    },
  };
}

export default function IDEPage(props: any) {
  console.log('data', props.data);
  return (
    <ClassroomLayout>
      <IDE />
    </ClassroomLayout>
  );
}

IDEPage.requireAuth = true;
