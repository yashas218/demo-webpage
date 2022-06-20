import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">HEALTHCARE AT ITS BEST</h1>
        <h6 className="mb-5">SOME IMPORTANT REASONS FOR HOSPITALS TO BE PRESENT EVERYWHERE {postSlug}</h6>
        <p>
        Hospitals are significant as they treat minor and serious diseases, illnesses and disorders of the body function of varying types and severity. 
        Moreover, they also help in promoting health, giving information on the prevention of illnesses and providing curative services.
        </p>
        <p>
        Hospitals are one of the most important pillars of any society. They are the physical execution of one of the pillars that form the infrastructure of a nation: healthcare.
         An adequate number of hospitals in a country, with proper equipment and facilities in each, denote the kind of care and concern the government has for its citizens. Today, 
         hospitals are playing an increasingly important role in peoples lives; with great pollution levels and changing lifestyles, more and more people are falling prey to diseases and requiring adequate medical care.
        </p>
        <p>
        7 Reasons why Hospitals are Important



 Extensive treatment
Any hospital, even the most rudimentary or backward of them, can provide more treatment options for a patient that in-home healthcare would. Hospitals are equipped with medical equipment that aids in the diagnosis and 
treatment of the most serious patients. Take, for instance, a case of an accident. Taking an injured individual to a doctors private chamber or calling the doctor home will not provide the kind of adequate and timely attention 
that a hospital will guarantee. Be it emergency operations, critical care, or life support systems, these are all facilities only a hospital will be able to provide.

Multiple healthcare professionals
When you go visit a hospital, you will find a host of doctors, nurses, and interns milling busily about. At any given point of time, more than one doctor will be attending to a patient. This routine, when properly coordinated,
 provides the patient with the maximum care one can receive in their condition. Doctors are in consultation with each other regarding a case, which makes it possible for the patient to receive an unambiguous diagnosis and treatment. 
 The availability of more than one doctor and nurse also means that the patient can take as many opinions as they want. Most importantly, no patient will ever go unattended at any given point of time in an adequately staffed hospital.

Everything under one roof
If there had been no hospitals, we would have to look for specialist doctors in their respective offices for our particular illness. This would mean a lot of hassle for the patients and their families, which would translate to 
unnecessary wastage of time. Having hospitals have narrowed down that search a lot. We can take patients to a hospital and get directed to the respective wing, and the relevant doctors will all take it from there.

Employment opportunity
Hospitals act as a great source of employment for a vast section of the society. Being part of a hospital staff is highly beneficial and convenient for new doctors and nurses, providing them with a wide array of relevant and necessary experience.
 Apart from this, hospitals also employ a huge number of people in professions other than those directly related to healthcare, such as the maintenance crew and equipment handlers.

Cheaper healthcare
Government aided or funded hospitals provide treatment options for patients from underprivileged communities at a much cheaper rate. In fact, in many instances, depending on the infrastructure of the nation of course,
 healthcare is completely free for people from poor communities. Without hospitals, each person would be dependent on the much more economically taxing private doctors, and poor people would find it virtually impossible to seek proper treatment.

Raises awareness
The government of a country raises awareness about disease prevention and vaccination through hospitals. Providing free vaccinations to a vast number of people efficiently and smoothly is only possible through the infrastructure that a hospital has, 
without which the whole system would become haphazard and impossible to coordinate.

Specialized treatment
Hospitals provide the specialized treatment that certain illnesses require. A person with a contagious illness or carrying germs categorized as biohazards cannot possibly be treated at home. Again, certain illnesses require constant medical 
attention that only a hospital infrastructure can provide. Sometimes, people suffering from psychological illnesses or case of trauma or abuse can only be safely housed in a hospital. Specialized hospitals for animals and for different diseases
 ensure that each section of the population receives the proper and particular care that they need.

Hospitals have traditionally been associated with illness instead of wellness. We visit a hospital when we are sick, being habituated to quick fixes to our problems. However, hospitals can play a much more important role by spreading the importance
 of lifestyle changes by providing consultation services even before the patient becomes ill. This way, we shall become a much healthier population and spend a lot less on healthcare than we do at present
        </p>
      </div>
    </div>
  );
}

export default Post;