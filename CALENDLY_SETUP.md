# Test Drive Scheduling Setup Guide

This guide will help you set up Calendly integration for scheduling test drives with vehicle-specific information.

## 🚀 Quick Setup

### 1. Calendly Account Setup

1. **Create a Calendly Account**
   - Go to [calendly.com](https://calendly.com)
   - Sign up for a free or paid account
   - Verify your email

2. **Create a Test Drive Event Type**
   - Click "Create" → "Event Type"
   - Choose "One-on-One" meeting type
   - Name it "Test Drive Appointment"
   - Set duration to 45 minutes (recommended)

### 2. Configure Event Settings

#### Basic Information
```
Event Name: Test Drive Appointment
Duration: 45 minutes
Description: Schedule a test drive for your selected vehicle. Please bring a valid driver's license and proof of insurance.
```

#### Location Settings
- Choose "In-person meeting"
- Add your dealership address:
  ```
  123 Auto Row
  San Francisco, CA 94102
  ```

#### Availability
- Set your business hours
- Configure buffer times (15 minutes recommended)
- Set maximum advance booking (30-60 days)

### 3. Add Custom Questions

To capture vehicle-specific information, add these custom questions:

1. **Vehicle of Interest** (Required)
   - Type: Single line text
   - This will be auto-filled with: Year Make Model Trim

2. **Stock Number** (Required)
   - Type: Single line text
   - This will be auto-filled with the vehicle's stock number

3. **Phone Number** (Required)
   - Type: Phone number

4. **Preferred Contact Method** (Optional)
   - Type: Multiple choice
   - Options: Phone, Email, Text

5. **Additional Questions/Comments** (Optional)
   - Type: Multi-line text

### 4. Environment Configuration

Update your `.env.local` file:

```bash
# Replace with your actual Calendly event URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/test-drive
```

**To find your Calendly URL:**
1. Go to your Calendly dashboard
2. Click on your "Test Drive Appointment" event
3. Copy the "Event Link" (should look like above)

### 5. Advanced Calendly Configuration

#### Custom Branding (Paid plans)
- Upload your dealership logo
- Customize colors to match your brand
- Add custom confirmation/reminder messages

#### Integrations
- **CRM Integration**: Connect to Salesforce, HubSpot, etc.
- **Calendar Sync**: Google Calendar, Outlook, etc.
- **Notifications**: Set up email/SMS notifications

#### Webhook Setup (Advanced)
For real-time booking notifications to your system:

1. In Calendly, go to Integrations → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/calendly-webhook`
3. Select events: `invitee.created`, `invitee.canceled`

## 🔧 Implementation Details

### Component Structure

```
src/
├── components/
│   └── TestDriveModal.tsx     # Modal for scheduling from vehicle pages
├── app/
│   └── test-drive/
│       └── page.tsx           # Dedicated test drive page
```

### Features Implemented

✅ **Vehicle Information Pre-fill**
- Automatically passes vehicle year, make, model, trim
- Includes stock number and vehicle ID
- Links booking to specific vehicle

✅ **Modal Integration**
- Opens from vehicle detail pages
- Clean, professional UI
- Mobile responsive

✅ **Dedicated Page**
- Direct link to `/test-drive?vehicleId=123`
- Shows vehicle information
- Standalone scheduling experience

✅ **User Experience**
- Loading states while Calendly loads
- Clear instructions and requirements
- Contact information for questions

### URL Parameters

The system supports these URL patterns:

```
/test-drive                           # General scheduling
/test-drive?vehicleId=abc123         # Vehicle-specific scheduling
```

### Data Flow

1. User clicks "Schedule Test Drive" on vehicle page
2. Vehicle information is passed to modal/page
3. Calendly widget loads with pre-filled data
4. Customer selects time slot
5. Booking confirmation sent to both parties
6. Vehicle info included in calendar event

## 📱 Mobile Optimization

The implementation is fully responsive:
- Modal adjusts to screen size
- Calendly widget scales appropriately
- Touch-friendly interface
- Fast loading on mobile networks

## 🔐 Security & Privacy

- No sensitive data stored in browser
- Calendly handles all booking data securely
- GDPR compliant (when using EU servers)
- SSL encrypted communication

## 📈 Analytics & Tracking

To track test drive bookings:

1. **Google Analytics**
   - Track modal opens
   - Monitor booking completions
   - Analyze vehicle interest

2. **Calendly Analytics** (Paid plans)
   - Booking conversion rates
   - Popular time slots
   - No-show rates

## 🛠 Customization Options

### Styling
- Update colors in `TestDriveModal.tsx`
- Modify layout in test drive page
- Add your branding elements

### Functionality
- Add additional form fields
- Integrate with your CRM
- Custom confirmation workflows

## 🚨 Testing Checklist

Before going live:

- [ ] Test modal opens/closes correctly
- [ ] Vehicle information displays properly
- [ ] Calendly widget loads without errors
- [ ] Mobile responsiveness verified
- [ ] Booking confirmation emails working
- [ ] Calendar integration functional
- [ ] Custom questions capturing data

## 📞 Support

If you need help:
1. Check Calendly's documentation
2. Test in development environment first
3. Monitor browser console for errors
4. Verify environment variables are set

## 🎯 Next Steps

1. Set up your Calendly account
2. Update the environment variable
3. Test the booking flow
4. Customize styling if needed
5. Train your team on the new system

The system is now ready for production use! 🚀
