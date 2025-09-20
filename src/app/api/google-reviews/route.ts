import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJWTOE1zyjLIgRkffz3YsNGLI'; // Your Place ID as fallback

export async function GET(request: NextRequest) {
  try {
    console.log('API Key configured:', !!GOOGLE_PLACES_API_KEY);
    console.log('Place ID:', PLACE_ID);

    if (!GOOGLE_PLACES_API_KEY) {
      console.error('Missing GOOGLE_PLACES_API_KEY');
      return NextResponse.json(
        { error: 'Google Places API key not configured. Please add GOOGLE_PLACES_API_KEY to your .env.local file.' },
        { status: 500 }
      );
    }

    const fields = 'name,rating,reviews,user_ratings_total,formatted_address,international_phone_number';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&key=${GOOGLE_PLACES_API_KEY}`;

    console.log('Fetching from URL:', url.replace(GOOGLE_PLACES_API_KEY, 'API_KEY_HIDDEN'));

    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('HTTP Error:', response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response status:', data.status);
    console.log('API Response data keys:', Object.keys(data));

    if (data.status === 'REQUEST_DENIED') {
      console.error('API Request denied:', data.error_message);
      return NextResponse.json(
        { error: `Google API Error: ${data.error_message || 'Request denied. Check your API key and billing setup.'}` },
        { status: 403 }
      );
    }

    if (data.status === 'INVALID_REQUEST') {
      console.error('Invalid request:', data.error_message);
      return NextResponse.json(
        { error: `Invalid request: ${data.error_message || 'Check your Place ID.'}` },
        { status: 400 }
      );
    }

    if (data.status !== 'OK') {
      console.error('API Error:', data.status, data.error_message);
      return NextResponse.json(
        { error: `Google Places API error: ${data.status} - ${data.error_message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    // Log successful response details
    if (data.result) {
      console.log('Business name:', data.result.name);
      console.log('Rating:', data.result.rating);
      console.log('Total reviews:', data.result.user_ratings_total);
      console.log('Reviews count:', data.result.reviews?.length || 0);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: `Failed to fetch reviews: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
