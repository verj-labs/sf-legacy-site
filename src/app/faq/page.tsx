export const metadata = {
  title: 'Frequently Asked Questions - SF Legacy Motors',
  description: 'Get answers to common questions about buying used cars, financing, warranties, and more at SF Legacy Motors.',
}

export default function FAQ() {
  const faqs = [
    {
      question: "Do you offer financing for bad credit?",
      answer: "Yes! We work with multiple banks and financial institutions to help customers with all types of credit situations. Our financing team specializes in finding solutions for customers with less-than-perfect credit. We'll work with you to find a financing option that fits your budget and helps you get the car you need."
    },
    {
      question: "Can I trade in my car if I still owe money?",
      answer: "Absolutely! You can trade in your vehicle even if you still have a loan balance. We'll work with your lender to pay off your existing loan and apply any remaining equity toward your new purchase. If you owe more than the car is worth, we can often roll the difference into your new loan."
    },
    {
      question: "Are your vehicles inspected and certified?",
      answer: "Yes, all our vehicles undergo a thorough multi-point inspection before being offered for sale. We provide clean CARFAX reports and ensure each vehicle meets our quality standards. Many of our vehicles also come with additional certification programs that provide extra peace of mind."
    },
    {
      question: "What warranty options do you offer?",
      answer: "We offer comprehensive warranty plans ranging from basic powertrain coverage to exclusionary coverage that protects nearly everything on your vehicle. Our warranty plans are backed by reputable providers and can be customized to fit your needs and budget. Extended warranty coverage is available for most vehicles."
    },
    {
      question: "Do you accept cash or only financing?",
      answer: "We accept both cash payments and financing. Whether you want to pay in full with cash, get a loan through us, or arrange your own financing through a bank or credit union, we can accommodate your preferred payment method. Cash buyers often have more negotiating power and faster transaction times."
    },
    {
      question: "What documents do I need to buy a car?",
      answer: "To purchase a vehicle, you'll typically need: a valid driver's license, proof of insurance, proof of income (recent pay stubs or tax returns), proof of residence (utility bill or lease agreement), and if financing, bank statements. If you're trading in a vehicle, bring the title and registration. We'll guide you through the exact requirements based on your situation."
    },
    {
      question: "Can I take the car for a test drive?",
      answer: "Of course! We encourage all customers to test drive any vehicle they're considering. Just bring a valid driver's license and proof of insurance. We'll accompany you on the test drive to answer any questions and ensure you're comfortable with the vehicle's performance and features."
    },
    {
      question: "How long does the buying process take?",
      answer: "The buying process typically takes 1-3 hours depending on whether you're paying cash or financing. Cash transactions are usually faster, while financing may take longer if we need to verify income or arrange the loan. We work efficiently to get you on the road as quickly as possible while ensuring all paperwork is properly completed."
    },
    {
      question: "Do you provide vehicle history reports?",
      answer: "Yes, we provide CARFAX reports for all our vehicles. These reports show important information about the vehicle's history, including any accidents, previous owners, service records, and title issues. We believe in transparency and want you to have all the information you need to make an informed decision."
    },
    {
      question: "What if I have problems with my car after purchase?",
      answer: "We stand behind the vehicles we sell. If you experience any issues, contact us immediately. Depending on your warranty coverage and the nature of the problem, we'll work with you to resolve it. We also have relationships with trusted local service centers and can recommend qualified mechanics for ongoing maintenance."
    },
    {
      question: "Can I return a car if I change my mind?",
      answer: "While all sales are typically final, we understand that buying a car is a major decision. If you experience any issues or concerns shortly after purchase, please contact us immediately. We'll work with you to find a solution that ensures your satisfaction with your purchase."
    },
    {
      question: "Do you offer any guarantees or return policies?",
      answer: "We offer a satisfaction guarantee on all our vehicles. This means we stand behind the quality and condition of every car we sell. While specific return policies may vary, we're committed to ensuring you're happy with your purchase and will work with you to address any legitimate concerns."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about buying used cars, financing, warranties, and more. 
            If you don't find what you're looking for, feel free to contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="flex justify-between items-center w-full px-6 py-4 text-left bg-white rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <h3 className="text-lg font-medium text-ink pr-4">
                  {faq.question}
                </h3>
                <svg className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our knowledgeable team is here to help. Contact us directly for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:555-123-4567"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
            >
              📞 Call (555) 123-4567
            </a>
            <a
              href="/contact"
              className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors inline-flex items-center justify-center"
            >
              💬 Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
