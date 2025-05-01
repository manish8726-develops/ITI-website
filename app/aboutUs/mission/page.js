import React from 'react'

const page = () => {
  return (
    <div className="text-center my-12 px-4">
  {/* Hindi Heading */}
  <h2 className="text-3xl font-bold mb-4 relative inline-block">
    <span className="border-t-4 border-b-4 border-black px-4">लक्ष्य</span>
  </h2>

  {/* Hindi Paragraph */}
  <p className="text-gray-600 text-lg leading-8 max-w-4xl mx-auto mb-12 font-semibold para">
    अपने अंदर छुपी हुई क्षमता को पहचान कर बाहर लाना और अनुशासित होना, साथ ही साथ
    अपने अंदर की क्षमता का विकास करना, जिससे हम भविष्य में आने वाले व्यावसायिक
    समस्याओं का समाधान करने के लिए तैयार रहे।
  </p>

  {/* English Heading */}
  <h2 className="text-3xl font-bold mb-4 relative inline-block">
    <span className="border-t-4 border-b-4 border-black px-4">Mission</span>
  </h2>

  {/* English Paragraph */}
  <p className="text-gray-800 text-lg leading-8 max-w-4xl mx-auto font-semibold para">
    To bring out the hidden potential and to develop discipline, along with leadership qualities
    in order to make you equipped to face future professional challenges.
  </p>
</div>

  )
}

export default page
