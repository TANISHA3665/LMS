import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard
          id='123'
        name='Neura the Brainy Explorer'
        topic='Neural Network of the Brain'
        subject='science'
        duration={45}
        color='#E5D0FF'
        bookmarked={true}
        />

        <CompanionCard
          id='456'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          subject='science'
          duration={45}
          color='#ffda6e'
          bookmarked={true}
        />

        <CompanionCard
          id='789'
          name='Verba the Vocabulary Builder'
          topic='English language'
          subject='English Literature'
          duration={30}
          color='#BDE7FF'
          bookmarked={true}
        />

      </section>

      <section className='home-section'>
        <CompanionsList />
        <CTA/>
      </section>
    </main>
  );
};

export default Page;