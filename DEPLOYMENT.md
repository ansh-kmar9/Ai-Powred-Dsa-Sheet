# Deployment Configuration

## Deployed URLs

- **Frontend (Vercel)**: https://www.dsasheet.site/
- **Backend (Render)**: https://dsasheet-koey.onrender.com

## Environment Variables Configuration

### Server (.env)

```
NODE_ENV=production
PORT=5000
MONGODB_URI=[Your MongoDB Atlas connection string]

JWT_SECRET=[Your JWT secret]

# Google OAuth
GOOGLE_CLIENT_ID=[Your Google OAuth Client ID]
GOOGLE_CLIENT_SECRET=[Your Google OAuth Client Secret]
GOOGLE_CALLBACK_URL=https://dsasheet-koey.onrender.com/auth/google/callback

# Frontend URL
CLIENT_URL=https://ai-powred-dsa-sheet.vercel.app

# Session Secret
SESSION_SECRET=[Your session secret]
```

### Client (.env)

```
VITE_API_URL=https://dsasheet-koey.onrender.com
VITE_GOOGLE_AI_API_KEY=[Your Google AI API Key]
```

## Google OAuth Configuration

**Important**: You need to update your Google OAuth app settings in the Google Cloud Console:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to APIs & Services > Credentials
3. Find your OAuth 2.0 Client ID (from your credentials)
4. Add these authorized redirect URIs:
   - `https://dsasheet-koey.onrender.com/auth/google/callback`
5. Add these authorized JavaScript origins:
   - `https://ai-powred-dsa-sheet.vercel.app`
   - `https://dsasheet-koey.onrender.com`

## File Updates Made

### Server Configuration

- ✅ Updated `GOOGLE_CALLBACK_URL` to use Render URL
- ✅ Updated `CLIENT_URL` to use Vercel URL (removed trailing slash)
- ✅ CORS already configured to use `CLIENT_URL` environment variable
- ✅ Auth redirects already use `CLIENT_URL` environment variable

### Client Configuration

- ✅ Updated `VITE_API_URL` to use Render backend URL
- ✅ Updated Google Auth login to use dynamic API URL from environment variable
- ✅ All API calls use environment variable through `utils/api.js`

## Authentication Flow

1. User clicks login on frontend (Vercel)
2. Redirects to: `https://dsasheet-koey.onrender.com/auth/google`
3. Google OAuth redirects back to: `https://dsasheet-koey.onrender.com/auth/google/callback`
4. Server processes auth and redirects to: `https://ai-powred-dsa-sheet.vercel.app/dashboard?token=JWT_TOKEN`

## Next Steps

1. ✅ Update environment variables on Render dashboard for the server
2. ✅ Update environment variables on Vercel dashboard for the client
3. ⚠️ **IMPORTANT**: Update Google OAuth settings in Google Cloud Console with new redirect URIs
4. Test the complete authentication flow

## Testing Checklist

- [ ] Visit https://ai-powred-dsa-sheet.vercel.app/
- [ ] Click "Login with Google"
- [ ] Complete Google OAuth flow
- [ ] Verify redirect to dashboard with authentication
- [ ] Test API calls (sheets, problems, AI doubt solver)
- [ ] Test logout functionality
