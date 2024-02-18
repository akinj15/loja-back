import { HttpException, HttpStatus } from '@nestjs/common';
import { google } from 'googleapis';
import { Credentials } from 'google-auth-library';

import { environment } from 'config/enviroments';

export const oauth2Client = new google.auth.OAuth2(
  environment.CLIENT_ID,
  environment.CLIENT_SECRET,
  environment.REDIRECT_URL,
);

export function generateAuthUrl() {
  return oauth2Client.generateAuthUrl({
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
    include_granted_scopes: true,
  });
}

export async function googleAuth(code: string) {
  const response = await oauth2Client.getToken(code).catch((error: Error) => {
    return error;
  });

  if (response instanceof Error) {
    throw new HttpException(response.message, HttpStatus.BAD_REQUEST);
  }

  return response.tokens;
}

export async function googleGetUser(token: Credentials) {
  const oauth2 = google.oauth2('v2');

  const { data: tokenData, statusText: tokenStatus } = await oauth2.tokeninfo({
    access_token: token.access_token,
  });

  if (!tokenData) {
    throw new HttpException(tokenStatus, HttpStatus.BAD_REQUEST);
  }

  const { data: userData, statusText: userStatus } = await oauth2.userinfo.get({
    oauth_token: token.access_token,
  });

  if (!userData) {
    throw new HttpException(userStatus, HttpStatus.BAD_REQUEST);
  }

  return userData;
}
