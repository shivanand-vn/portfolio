import SectionHeading from '../components/SectionHeading'
import ReviewForm from '../components/ReviewForm'
import TestimonialCard from '../components/TestimonialCard'

export default function ReviewSection() {
  return (
    <section id="reviews" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Reviews"
          title="Share Your Feedback"
          description="I value your thoughts! Leave a review about my work."
        />

        <div className="flex flex-col gap-16">
          {/* Review Form */}
          <ReviewForm />
        </div>
      </div>
    </section>
  )
}
