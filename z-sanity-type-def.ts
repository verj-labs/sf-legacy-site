/**
 * file not used in this project but copied for reference
 */

// import {defineField, defineType} from 'sanity'

// export const vehicleType = defineType({
//   name: 'vehicle',
//   title: 'Vehicle',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'URL Slug',
//       type: 'slug',
//       options: {
//         source: (doc: any) => `${doc.year}-${doc.make}-${doc.model}-${doc.stockNum}`,
//         maxLength: 96,
//         slugify: (input: string) => input
//           .toLowerCase()
//           .replace(/\s+/g, '-')
//           .replace(/[^\w\-]+/g, '')
//           .replace(/\-\-+/g, '-')
//           .replace(/^-+/, '')
//           .replace(/-+$/, ''),
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     // Basic vehicle info
//     defineField({
//       name: 'year',
//       title: 'Year',
//       type: 'number',
//       validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear() + 2),
//     }),
//     defineField({
//       name: 'make',
//       title: 'Make',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Acura', value: 'Acura' },
//           { title: 'Audi', value: 'Audi' },
//           { title: 'BMW', value: 'BMW' },
//           { title: 'Buick', value: 'Buick' },
//           { title: 'Cadillac', value: 'Cadillac' },
//           { title: 'Chevrolet', value: 'Chevrolet' },
//           { title: 'Chrysler', value: 'Chrysler' },
//           { title: 'Dodge', value: 'Dodge' },
//           { title: 'Fiat', value: 'Fiat' },
//           { title: 'Ford', value: 'Ford' },
//           { title: 'GMC', value: 'GMC' },
//           { title: 'Honda', value: 'Honda' },
//           { title: 'Hyundai', value: 'Hyundai' },
//           { title: 'Infiniti', value: 'Infiniti' },
//           { title: 'Jaguar', value: 'Jaguar' },
//           { title: 'Jeep', value: 'Jeep' },
//           { title: 'Kia', value: 'Kia' },
//           { title: 'Land Rover', value: 'Land Rover' },
//           { title: 'Lexus', value: 'Lexus' },
//           { title: 'Lincoln', value: 'Lincoln' },
//           { title: 'Maserati', value: 'Maserati' },
//           { title: 'Mazda', value: 'Mazda' },
//           { title: 'Mercedes-Benz', value: 'Mercedes-Benz' },
//           { title: 'Mini', value: 'Mini' },
//           { title: 'Mitsubishi', value: 'Mitsubishi' },
//           { title: 'Nissan', value: 'Nissan' },
//           { title: 'Porsche', value: 'Porsche' },
//           { title: 'RAM', value: 'RAM' },
//           { title: 'Subaru', value: 'Subaru' },
//           { title: 'Tesla', value: 'Tesla' },
//           { title: 'Toyota', value: 'Toyota' },
//           { title: 'Volkswagen', value: 'Volkswagen' },
//           { title: 'Volvo', value: 'Volvo' },
//         ],
//         layout: 'dropdown',
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'model',
//       title: 'Model',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'trim',
//       title: 'Trim',
//       type: 'string',
//     }),
//     // Vehicle details
//     defineField({
//       name: 'vin',
//       title: 'VIN',
//       type: 'string',
//       validation: (Rule) => Rule.required().min(17).max(17),
//     }),
//     defineField({
//       name: 'carfaxLink',
//       title: 'Carfax Report Link',
//       type: 'url',
//       description: 'Optional link to Carfax vehicle history report',
//     }),
//     defineField({
//       name: 'stockNum',
//       title: 'Stock Number',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'odometer',
//       title: 'Odometer (km)',
//       type: 'number',
//       validation: (Rule) => Rule.required().min(0),
//     }),
//     defineField({
//       name: 'bodyType',
//       title: 'Body Type',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Sedan', value: 'sedan' },
//           { title: 'SUV', value: 'suv' },
//           { title: 'Truck', value: 'truck' },
//           { title: 'Coupe', value: 'coupe' },
//           { title: 'Convertible', value: 'convertible' },
//           { title: 'Wagon', value: 'wagon' },
//           { title: 'Hatchback', value: 'hatchback' },
//           { title: 'Van', value: 'van' },
//           { title: 'Crossover', value: 'crossover' },
//         ],
//         layout: 'dropdown',
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     // Powertrain
//     defineField({
//       name: 'engineDesc',
//       title: 'Engine Description',
//       type: 'string',
//       description: 'e.g., "2.5L 4-Cylinder"',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'transmission',
//       title: 'Transmission',
//       type: 'string',
//       description: 'e.g., "6-Speed Automatic"',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'drivetrain',
//       title: 'Drivetrain',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Front-Wheel Drive', value: 'fwd' },
//           { title: 'Rear-Wheel Drive', value: 'rwd' },
//           { title: 'All-Wheel Drive', value: 'awd' },
//           { title: '4-Wheel Drive', value: '4wd' },
//         ],
//         layout: 'radio',
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'fuelType',
//       title: 'Fuel Type',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Gasoline', value: 'gasoline' },
//           { title: 'Diesel', value: 'diesel' },
//           { title: 'Hybrid', value: 'hybrid' },
//           { title: 'Electric', value: 'electric' },
//           { title: 'Plug-in Hybrid', value: 'plug-in-hybrid' },
//         ],
//         layout: 'dropdown',
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     // Colors
//     defineField({
//       name: 'exteriorColor',
//       title: 'Exterior Color',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'interiorColor',
//       title: 'Interior Color',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     // Pricing
//     defineField({
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: (Rule) => Rule.required().min(0),
//     }),
//     defineField({
//       name: 'salePrice',
//       title: 'Sale Price',
//       type: 'number',
//       validation: (Rule) => Rule.min(0),
//     }),
//     // Description & features
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'highlights',
//       title: 'Key Highlights',
//       type: 'array',
//       of: [{ type: 'string' }],
//       description: 'Key selling points',
//     }),
//     defineField({
//       name: 'features',
//       title: 'Features',
//       type: 'array',
//       of: [{ type: 'string' }],
//       description: 'Vehicle features and options',
//     }),
//     // Images
//     defineField({
//       name: 'images',
//       title: 'Images',
//       type: 'array',
//       of: [
//         {
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         },
//       ],
//       options: {
//         layout: 'grid',
//       },
//     }),
//     // Fuel economy
//     defineField({
//       name: 'mpgCity',
//       title: 'MPG City',
//       type: 'number',
//       validation: (Rule) => Rule.min(0),
//     }),
//     defineField({
//       name: 'mpgHighway',
//       title: 'MPG Highway',
//       type: 'number',
//       validation: (Rule) => Rule.min(0),
//     }),
//     // Warranty
//     defineField({
//       name: 'warranty',
//       title: 'Warranty Information',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'hasWarranty',
//           title: 'Has Warranty',
//           type: 'boolean',
//           initialValue: false,
//         }),
//         defineField({
//           name: 'warrantyDescription',
//           title: 'Warranty Description',
//           type: 'text',
//           hidden: ({ parent }) => !parent?.hasWarranty,
//         }),
//         defineField({
//           name: 'extendedAvailable',
//           title: 'Extended Warranty Available',
//           type: 'boolean',
//           initialValue: false,
//         }),
//       ],
//     }),
//     // Financing
//     defineField({
//       name: 'financing',
//       title: 'Financing Information',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'monthlyPayment',
//           title: 'Monthly Payment',
//           type: 'number',
//           validation: (Rule) => Rule.min(0),
//         }),
//         defineField({
//           name: 'downPayment',
//           title: 'Down Payment',
//           type: 'number',
//           validation: (Rule) => Rule.min(0),
//         }),
//         defineField({
//           name: 'apr',
//           title: 'APR (%)',
//           type: 'number',
//           validation: (Rule) => Rule.min(0).max(100),
//         }),
//         defineField({
//           name: 'term',
//           title: 'Term (months)',
//           type: 'number',
//           validation: (Rule) => Rule.min(1),
//         }),
//       ],
//     }),
//     // Status
//     defineField({
//       name: 'status',
//       title: 'Status',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Available', value: 'available' },
//           { title: 'Sold', value: 'sold' },
//           { title: 'Pending', value: 'pending' },
//         ],
//         layout: 'radio',
//       },
//       initialValue: 'available',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'featured',
//       title: 'Featured Vehicle',
//       type: 'boolean',
//       initialValue: false,
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       year: 'year',
//       make: 'make',
//       model: 'model',
//       media: 'images.0',
//       status: 'status',
//     },
//     prepare(selection) {
//       const { title, year, make, model, media, status } = selection
//       return {
//         title: title || `${year} ${make} ${model}`,
//         subtitle: `Status: ${status}`,
//         media: media,
//       }
//     },
//   },
// })