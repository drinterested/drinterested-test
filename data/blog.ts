export type Author = {
  name: string
  image: string
  bio: string
  linkedIn?: string
  instagram?: string
  twitter?: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: Author
  topic: string
  readingTime: string
  featured?: boolean
}

export type BlogTopic = {
  name: string
  slug: string
  description: string
  image: string
}

// Authors
export const authors: Record<string, Author> = {
  "muhammad-lari": {
    name: "Muhammad Ibrahim Lari",
    image: "/lari.png",
    bio: "Muhammad Lari is a dedicated high school student with a strong academic background, particularly in science and mathematics. He is passionate about astronomy and health education, contributing to student initiatives that empower the community with valuable wellness insights.",
    linkedIn: "https://linkedin.com/in/muhammad-lari",
  },
  "shaza-ali": {
    name: "Shaza Ali",
    image: "/logo.png",
    bio: "Shaza is a 9th grade student with a deep interest in STEM, particularly neurology and cardiology. She has won several STEM competitions and is part of her school's green initiative club. She also hosts a true crime podcast called 'The Killer Instinct'.",
    instagram: "https://instagram.com/shaza.ali",
  },
  "maliha-metla": {
    name: "Maliha Metla",
    image: "/logo.png",
    bio: "Developing educational resources to help students understand medical concepts and career paths.",
    linkedIn: "https://linkedin.com/in/maliha-metla",
  },
  manha: {
    name: "Manha",
    image: "/logo.png",
    bio: "Creating content that highlights the achievements and experiences of our members.",
    twitter: "https://twitter.com/manha",
  },
}

// Blog Topics
export const blogTopics: BlogTopic[] = [
  {
    name: "Types of Nurses",
    slug: "nurses",
    description:
      "Explore the diverse roles and specializations within the nursing profession, from pediatric care to elder care and beyond.",
    image: "/logo.png",
  },
  {
    name: "Types of Doctors",
    slug: "doctors",
    description:
      "Learn about the various medical specialties and the doctors who practice them, from general practitioners to specialized consultants.",
    image: "/logo.png",
  },
  {
    name: "Cancer",
    slug: "cancer",
    description:
      "Discover the latest research, treatments, and insights into cancer, one of the most challenging medical conditions of our time.",
    image: "/logo.png",
  },
]

// Blog Posts
export const blogPosts: BlogPost[] = [
  // Types of Nurses
  {
    slug: "geriatric",
    title: "Nurses In Elder Care Centers",
    excerpt:
      "An in-depth look at the crucial role nurses play in elder care facilities, their responsibilities, challenges, and the impact they make on patients' lives.",
    content: `

# The Growing Importance of Nurses in Elder Care

Nurses in elder care centers play a vital role in providing comprehensive care to older adults. These specialized healthcare professionals combine clinical expertise with compassion to address the unique needs of the elderly population.

## Importance of Nurses

Nurses play a fundamental part in the hierarchy of the healthcare industry, and play an important part in ensuring the well-being of their patients, something that is commonly overlooked by most people. However, with the rise in population, the demand for skilled healthcare providers is exponentially increasing in many provinces. During 2023-2024, there has been a 40% increase for Nursing job listings in Ontario, with Alberta following with a 21% increase as well. Moreover, there are as many as 27.9 million nurses in the world, including 460,000 nurses in Canada, with an approximate annual pay of $90,000 a year. Moving on, Nurses work in many sectors of the healthcare industry, such as ‘Elder Care centers’. In Eldercare Centers, nurses assess the health, administer medication, supervise the elders, and so on.

## There are 3 main types of Nurses that we will be focusing on:

- Registered Nurses(RNs)
- Licenced Practical Nurses(LPNs)
- Geriatric Nurses

## Licensed Practical Nurses (LPNs):

First of all, we have Licensed Practical Nurses (LPNs) who deliver essential patient care through direct practices which they provide, usually in elder care facilities. LPN candidates need to pursue one-year programs such as diplomas or certificates at community colleges and vocational schools to achieve their education qualification. Completing their nursing education requires LPNs to pass the Regulatory Exam – Practical Nurse (REX-PN) to get their nursing license. The duties of LPNs in elder care settings include checking vital signs while assisting with the daily activities of residents and giving medications under supervision. Healthcare facilities require LPN practitioners to work under medical oversight from Registered Nurses (RNs) and doctors as they deliver patient care. Elderly patient health support becomes possible through the educational program that prepares nurses with the required skills and knowledge. LPN healthcare professionals form an essential part of healthcare by delivering improved quality care to patients under their medical attention.

## Registered Nurses (RNs):

 When cases become more complicated, the registered nurse takes over the responsibility of the Licensed Practical Nurses. Registered nurses, sometimes also known as “RNs”, play an important role in maintaining & monitoring the health of elderly individuals in elder care centers. Some of their core duties include assessing patients and developing care plans, monitoring vital signs, and administering a variety of medications, treatments, and vaccines. Registered nurses are found in many healthcare sectors, and the industry has its unique responsibilities. In Canada, to work as a Registered Nurse, one must have either a 4-year Bachelor of Science in Nursing degree (BSN) or some colleges offer a 2-3 year long nursing diploma. After that, students must complete the NCLEX-RN licence Exam which tests nursing knowledge and skills at the entry-to-practice level, and then register with the provincial body they wish to practice in.

## Geriatric Nurses:

Geriatric nurses are a type of registered nurse who specialize in taking care of elderly patients and are trained to address specific health challenges that the elder population may face, such as age related diseases and chronic pain. In most healthcare settings, the most common roles for Registered nurses are; help patients with light exercises, taking and recording patients’ vital signs, assisting physicians with procedures, educating patients and their families on treatment options for chronic conditions, and conducting comprehensive medical assessments.  The requirements to become a Geriatric nurse are the same as a registered nurse, but the candidates will need at least 2 years of bedside nursing/ registered nursing experiences before considering a speciality area such as Gerontology. One of the most successful and popular gerontology certificate options in Canada is ‘The Canadian Nurse Association Gerontology Certification. Anyone who wishes to work as a geriatric nurse is recommended to obtain this certification. Becoming such a nurse can be an exceptionally rewarding nursing career option as one can apply a mix of biological and psychological methods to study/nurture the elderly.

## Conclusion:
 Nursing is the largest healthcare profession in the world and is vital to any healthcare setting. Licensed practical nurses, registered nurses, and geriatric nurses, each play a critical role in providing emotional support, assistance, and medical care to the elderly population. As the elderly population grows at an exponential rate, the demand for nursing professions in long-term care settings will definitely increase, making it a viable career option to pursue. By recognizing the efforts and work of these dedicated professionals, as a society, we can foster a collaborative spirit to improve the lives of the elderly in eldercare centers.

## CITATIONS:
Admin. (2022, September 14). Basics of Geriatric Nursing in Canada. INSCOL. https://inscol.com/india/blog/geriatric-nursing-in-canada/#:~:text=Most%20positions%20of%20geriatric%20nursing,based%20healthcare%2C%20pharmaceuticals%2C%20etc.
Greenall, G. (2025, January 10). Registered nurse jobs (with salaries) in Canada - 2025 look. ebs. https://ebsource.ca/registered-nurse-jobs-in-canada/
Lisa Lagace. (2024, December 10). Demand for nurses in Canada still high as talent shortage ... Indeed. https://ca.indeed.com/career-advice/news/high-demand-for-nurses#:~:text=While demand has slowed in,searched by employers throughout 2023.
What is a geriatric nurse?. Fortis Colleges & Institutes: Accredited Career Training Programs. (2023, December 11). https://www.fortis.edu/blog/nursing/what-is-a-geriatric-nurse-.html#:~:text=They’re%20registered%20nurses%20(RNs,may%20monitor%20patients’%20daily%20mobility
`,
    coverImage: "/logo.png",
    date: "April 10, 2025",
    author: authors["muhammad-lari"],
    topic: "Types of Nurses",
    readingTime: "8 min read",
    featured: true,
  },
//PICU
  {
    slug: "pediatric",
    title: "Pediatric Nurses",
    excerpt:
      "Discover the specialized world of pediatric nursing, where healthcare professionals dedicate their careers to caring for children from infancy through adolescence.",
    content: `

# The Critical Role of Pediatric Nurses in Modern Healthcare:

Pediatric nurses play a vital role in healthcare by providing specialized medical care to children from infancy through adolescence. Despite the presence of 1.9 million pediatric nurses in the U.S., only 3.7% of nurse practitioners hold pediatric certification, highlighting a growing demand for specialized healthcare workers. The U.S. Bureau of Labor Statistics projects a 6% growth in registered nursing positions from 2023 to 2033, emphasizing the need for pediatric nurses to ensure children's well-being. Among them, Pediatric Intensive Care Unit (PICU) nurses hold the highest specialization, managing critically ill children facing life-threatening conditions.

## Becoming a Pediatric Intensive Care Unit (PICU) Nurse:

Becoming a PICU nurse requires completing a two- to four-year nursing program, earning an ADN or BSN degree, passing the NCLEX-RN exam, and undergoing extensive training. These nurses treat critical infections, trauma cases, substance overdoses, congenital conditions, and complex surgeries. Due to their expertise, PICU nurses earn a median annual salary of $114,725, with demand expected to grow by 6% from 2021 to 2031 as healthcare facilities increasingly require specialized pediatric treatments.

## Caring for the Tiniest Lives: The Work of Neonatal Nurses:

Another essential area within pediatric nursing is neonatal nursing, which focuses on caring for newborns with complications such as prematurity, birth defects, and infections. While neonatal nurses primarily care for infants in their first month, they may continue treatments for children up to two years old. Their responsibilities include monitoring vital signs, performing neonatal tests, and assisting mothers in postnatal recovery. By providing specialized interventions, neonatal nurses play a crucial role in reducing infant mortality rates and improving overall newborn health outcomes.

## Expanded Roles and Responsibilities of Pediatric Nurses:

Beyond direct patient care, pediatric nurses conduct developmental assessments, administer vaccinations, educate parents, and provide emotional support to families. They help guide difficult medical decisions by explaining pediatric treatment options and tailoring care to different age groups. Their ability to deliver compassionate and effective treatment makes them essential healthcare providers in hospitals, clinics, and community health settings.

## Conclusion:

With the increasing demand for pediatric healthcare services, more nurses must specialize in this field to meet future needs. The profession offers competitive salaries, career growth opportunities, and the rewarding experience of helping children. Investing in pediatric nursing programs is crucial to ensure a steady pipeline of skilled professionals. Pediatric nurses not only provide critical medical care but also serve as advocates and caregivers, making a lasting impact on children's health and development.


`,
    coverImage: "/logo.png",
    date: "March 25, 2025",
    author: authors["shaza-ali"],
    topic: "Types of Nurses",
    readingTime: "7 min read",
  },

  // Types of Doctors
  {
    slug: "internist",
    title: "Internist and General Care Provider",
    excerpt:
      "Explore the essential role of internists and general care providers as the foundation of the healthcare system and often the first point of contact for patients.",
    content: `
# Who Are Internal Medicine Doctors?

When people get sick, they usually visit a doctor for help. But not all doctors treat the same kinds of illnesses. Some handle common health problems, like the flu or minor injuries,
while others focus on serious and complex diseases. One type of doctor that specializes in adult health is an Internal Medicine physician, also called an internist. These doctors are highly trained to deal with complicated medical conditions, especially when a patient has more than one illness at the same time.

## Difference between General Practitioners(GPs) and internists

While both general practitioners (GPs) and internists can be primary care Doctors, there are some key differences between them. General practitioners treat people of all ages from babies to the elderly. They handle everyday health concerns and refer patients to specialists if needed. Internists, on the other hand, focus only on adults and specialize in diagnosing and treating chronic and complex diseases like heart disease, diabetes, and autoimmune disorders.

## Advanced Training and Diagnostic Expertise

Internists complete a three-year residency after medical school, where they get Advanced training in adult medicine. Many of them work in hospitals, where they often handle difficult cases that other doctors can’t easily solve. Doctors see thousands of patients with common illnesses every year, but sometimes they come across something extremely rare and difficult to Diagnose.

## Who Are Internal Medicine Doctors or Internists?

When people get sick, they usually visit a doctor for help. But not all doctors treat the same kinds of illnesses. Some handle common health problems, like the Flu or minor injuries, while others focus on serious and complex diseases. One type of doctor that specializes in adult health is an Internal Medicine physician, also called an internist. These doctors are highly trained to deal with complicated medical conditions, especially when a patient has more than one illness at the same time.


## Solving Medical Mysteries: A Case of Sweet’s Syndrome 

One case involved a patient with a high fever and a painful, itchy rash all over her body.
At first, dermatologists (skin doctors) examined the patient, but they couldn’t figure out the
cause of the rash. So, they called in the internal medicine team for further investigation. After
running tests and carefully reviewing the patient’s symptoms, the internists identified the
condition as Sweet’s Syndrome, an uncommon inflammatory disorder that affects the skin.
One of the most shocking discoveries was that this syndrome is sometimes linked to
blood cancer. Even though it’s rare, certain types of blood cancer can cause skin related
symptoms like rashes. Once the doctors figured out what was happening, they started
chemotherapy, a treatment used to fight blood cancer. Over time, the patient’s condition
improved, and her rashes started to fade. Thanks to the teamwork between the internal medicine and dermatology departments, the doctors were able to correctly diagnose and treat her condition. This case highlights the critical role that internal medicine doctors play in healthcare. While general practitioners focus on common illnesses, internists are trained to diagnose and manage complex medical conditions. Sweet’s Syndrome is just one example of how an internist’s expertise can make a huge difference. By investigating rare diseases, connecting symptoms to hidden causes, and working with specialists, internists help patients get the right treatment even when the diagnosis is extremely challenging.

`,
    coverImage: "/logo.png",
    date: "April 8, 2025",
    author: authors["maliha-metla"],
    topic: "Types of Doctors",
    readingTime: "9 min read",
    featured: true,
  },
//Endocrinologist
  {
    slug: "endocrinologists",
    title: "The Role of Endocrinologists",
    excerpt:
      "Delve into the specialized field of endocrinology and learn how these physicians diagnose and treat hormonal disorders affecting multiple body systems.",
    content: `
# Endocrinologists: Experts in Hormonal Health and Disease Management

The endocrine system plays a vital role in regulating various bodily functions. Hormones, which are chemical messengers produced by glands, help control metabolism, growth, reproduction, and other essential processes. When there is an imbalance in hormone levels, it can lead to serious health problems. Endocrinologists are doctors who specialize in diagnosing and treating conditions related to hormonal imbalances. They help manage diseases like diabetes, thyroid disorders, infertility, osteoporosis, and even some types of cancer.

## Educational Path to Becoming an Endocrinologist

To become an endocrinologist, a person must go through extensive education and training. First, they must earn a bachelor’s degree and take the Medical College Admission Test (MCAT) to gain entry into medical school. Medical school lasts about four years and provides future doctors with the knowledge they need. After medical school, they complete a two-year residency in internal medicine or endocrinology, where they receive hands-on experience treating patients. Following residency, they must complete a two- to three-year fellowship focused on endocrinology, diabetes, and metabolism. Finally, they take an exam to become board-certified in internal medicine, and they need another certification from the American Board of Internal Medicine to specialize in endocrinology.

## Case Study: Detecting Cancer Through Hormonal Markers

A recent case study underscores the critical role endocrinologists play in identifying life-threatening conditions. An 88-year-old man was admitted to the hospital with COVID-19. While his infection eventually resolved, doctors observed that his procalcitonin (ProCT) levels were unusually elevated. Although ProCT typically rises due to bacterial infections, it can also signal the presence of medullary thyroid cancer (MTC). To delve deeper, physicians measured his serum calcitonin (CT) levels, which were found to be significantly high—prompting further investigation into a potential underlying cause.

## Diagnosis and Confirmation of Medullary Thyroid Cancer

To investigate the abnormal hormone levels, doctors conducted a CT scan, which revealed a mass in the patient’s thyroid. An ultrasound provided more detail, identifying a 50mm nodule in the right thyroid lobe that extended into the mediastinum. To determine whether the nodule was cancerous, a fine needle aspiration biopsy was performed. The results confirmed the diagnosis: medullary thyroid cancer (MTC).

## Treatment and Long-Term Management

Since the cancer was already at an advanced stage, surgery was not a viable option. Instead, the patient was prescribed cabozantinib, a targeted medication used to treat medullary thyroid cancer. He began taking a daily dose of 40 mg. Sixteen months into treatment, the patient continues on the same regimen. Although his calcitonin levels remain elevated, there has been no evidence of disease progression. Most importantly, he maintains his independence and is able to carry out daily activities, highlighting the effectiveness of ongoing medical management.

## The Vital Role of Endocrinologists in Patient Outcomes

Endocrinologists play a crucial role in diagnosing and treating hormone-related diseases. The case study of the 88-year-old man underscores how an endocrinologist’s expertise led to the detection of medullary thyroid cancer through abnormal hormone levels. Although surgery was not an option, ongoing treatment has successfully controlled the disease, allowing the patient to maintain his independence and quality of life. This case highlights the importance of early detection and specialized medical care in managing complex endocrine disorders.

`,
    coverImage: "/logo.png",
    date: "March 30, 2025",
    author: authors["manha"],
    topic: "Types of Doctors",
    readingTime: "8 min read",
  },

  // Coley tox
{
  slug: "coleys-toxins",
  title: "Coley's Toxins",
  excerpt:
    "Explore the fascinating history of Coley's Toxins, one of the earliest forms of immunotherapy, and its impact on modern cancer treatment approaches.",
  content: `
# The Origins of Cancer Immunotherapy: Coley’s Toxins

In the early 19th century, Dr. William Coley pioneered a novel approach to cancer treatment with what became known as Coley’s toxins. He believed that injecting killed bacteria into cancer patients could stimulate the immune system and cause tumors to shrink. Although his method faced skepticism and eventually fell out of favor, Coley’s groundbreaking work laid the foundation for the development of modern cancer immunotherapy.

## Coley’s Inspiration: Linking Infections to Tumor Regression

Coley’s interest in bacterial immunotherapy was sparked by historical reports of cancer regression following severe infections. In the 18th and 19th centuries, physicians observed that some patients experienced tumor shrinkage after contracting bacterial illnesses. Motivated by the tragic death of a young cancer patient, Elizabeth Dashiell, Coley began researching these phenomena. He discovered several cases where cancer patients who developed bacterial infections underwent spontaneous tumor regression. Building on these findings, Coley created a bacterial cocktail containing Streptococcus pyogenes and Serratia marcescens, which he used to treat cancer patients—achieving mixed but occasionally remarkable results.

## Legacy and Impact: From Skepticism to Modern Immunotherapy

Despite showing promise in some cases, Coley’s toxins were met with skepticism due to the absence of standardized clinical trials and consistent outcomes. By the mid-20th century, the rise of chemotherapy and radiation therapy overshadowed Coley’s approach, leading to a decline in its use. Additionally, regulatory changes in the 1960s further restricted access to his bacterial treatments. Still, Coley’s groundbreaking work laid the foundation for modern cancer immunotherapy. Today, targeted immunotherapies, such as checkpoint inhibitors and CAR-T cell therapy, reflect the same principle of harnessing the immune system to fight cancer. Ongoing research into bacterial-based treatments continues to validate Coley’s early insights—revealing just how far ahead of his time he truly was.

## Conclusion:

Although Coley’s toxins are no longer used, their impact on cancer treatment remains significant. His innovative approach demonstrated the potential of the immune system in fighting cancer, paving the way for today’s immunotherapies. While his treatment was not widely accepted in his time, it helped inspire modern breakthroughs that continue to improve cancer care.


  `,
  coverImage: "/coleytoxins.png",
  date: "April 12, 2025",
  author: authors["shaza-ali"],
  topic: "Cancer",
  readingTime: "7 min read",
},
//Immunotherapy
{
  slug: "immunotherapy",
  title: "Immunotherapy",
  excerpt:
    "Understand how modern immunotherapy harnesses the body's own immune system to fight cancer, revolutionizing treatment approaches and outcomes.",
  content: `
# Immunotherapy: A Powerful Cancer Treatment

Immunotherapy is a medical treatment that empowers the body’s own immune system to fight diseases, particularly cancer. Its main goal is to strengthen or modify immune responses so the body can recognize and eliminate harmful cells more effectively. Unlike traditional treatments like chemotherapy or radiation, which directly target cancer cells, immunotherapy works by enhancing the body’s natural defense mechanisms. This innovative approach has emerged as a promising option, especially for patients with specific types of cancer where other treatments may be less effective.

## Types of Immunotherapy: Different Paths to the Same Goal

There are several types of immunotherapy, each designed to boost the immune system in unique ways. Monoclonal antibodies are lab-engineered molecules that mimic the immune system’s natural ability to detect harmful invaders. These antibodies attach to cancer cells and act as flags, helping the immune system identify and eliminate them. Checkpoint inhibitors work by blocking proteins that normally stop immune cells from attacking healthy tissue—proteins that some cancers exploit to avoid detection. By disabling these proteins, checkpoint inhibitors free the immune system to aggressively target cancer cells. Another approach is through cancer vaccines, which train the immune system to recognize and attack specific cancer cells, helping to prevent the disease from spreading or returning.Types of Immunotherapy: Diverse Tools for Fighting Cancer

## Conclusion

Immunotherapy offers a promising alternative to traditional cancer treatments. By enhancing the body’s natural defenses, it can improve survival rates and reduce the side effects often caused by chemotherapy and radiation. As research continues, immunotherapy is expected to play an even larger role in the fight against cancer.

  `,
  coverImage: "/logo.png",
  date: "April 8, 2025",
  author: authors["maliha-metla"],
  topic: "Cancer",
  readingTime: "9 min read",
  featured: true,
},
//Cancer
{
  slug: "cancer",
  title: "Cancer",
  excerpt:
    "A comprehensive overview of cancer, exploring its causes, types, diagnosis, treatment approaches, and the latest research developments.",
  content: `
# What is Cancer: A General Overview

## Overview of Cancer:

Cancer is a disease characterized by the uncontrolled growth and spread of abnormal cells within the body. This condition can originate in almost any tissue or organ, as our bodies continually produce new cells. When errors occur during the process of cell division, known as mitosis, it can lead to the formation of cancerous cells. These cells can proliferate uncontrollably and invade surrounding tissues, eventually spreading to other parts of the body—a process known as Metastasis.

## Understanding Tumors:

Tumors are often associated with cancer and can vary in nature. Benign tumors are generally harmless and may require minimal intervention, such as surgical removal. In contrast, malignant tumors pose more significant health risks as they invade nearby tissues and disrupt normal bodily functions. These tumors can cause complications depending on their location and the extent of their growth.

## Characteristics of Cancerous Cells:

Cancerous cells exhibit several distinctive characteristics that set them apart from normal cells. They grow autonomously, disregarding signals that would typically regulate cell division or induce cell death. Moreover, they have the ability to invade surrounding tissues and promote the development of blood vessels to supply nutrients to tumors—a process known as angiogenesis. Additionally, cancer cells often display chromosomal abnormalities and rely on altered metabolic pathways to sustain their rapid growth.

## Development of Cancer:

Cancer is fundamentally a genetic disease, primarily driven by mutations that disrupt the normal regulation of cell growth and division. These genetic changes can result from various factors, including errors during DNA replication, exposure to carcinogenic substances like those found in tobacco smoke or UV radiation, and inherited genetic mutations passed down through generations. While the body possesses mechanisms to repair DNA damage and suppress abnormal cell growth, these defenses can become compromised over time, contributing to the development of cancer.

## Types of Cancer:


Cancers are categorized based on the specific tissues or cells from which they originate. Common types include carcinoma, arising in epithelial cells such as those lining organs; sarcoma, originating in bone and soft tissues; leukemia, affecting blood-forming tissues like bone marrow; lymphoma, starting in lymphocytes of the immune system; and melanoma, beginning in pigment-producing melanocytes. Each type of cancer has distinct characteristics and may require different approaches to treatment.

This structured overview provides a comprehensive understanding of cancer, encompassing its nature, characteristics of cancerous cells, factors contributing to its development, and the diverse types of cancer that can affect the human body.
 `,
  coverImage: "/logo.png",
  date: "April 5, 2025",
  author: authors["muhammad-lari"],
  topic: "Cancer",
  readingTime: "10 min read",
},
// anaplastic thyroid cancer
{
  slug: "anaplastic-thyroid-cancer",
  title: "Anaplastic Thyroid Cancer",
  excerpt:
    "An in-depth look at anaplastic thyroid cancer, one of the most aggressive forms of thyroid cancer, including diagnosis, treatment options, and research developments.",
  content: `
# Anaplastic Thyroid Cancer: Understanding a Rare and Aggressive Disease

## What is Anaplastic Thyroid Cancer (ATC)?

Anaplastic Thyroid Cancer is one of the fastest growing and most aggressive of all cancers. It is also referred to as “ Undifferentiated Thyroid Cancer” because it acts and looks completely unlike a normal thyroid cell.  Although rare, as it accounts for less than 2% of all thyroid cancers,  Anaplastic Thyroid Cancer carries one of the worst prognosis of any cancer. Most patients are diagnosed at an advanced stage, which causes the median survival time to be  typically less than six months after being diagnosed.

## What causes ATCs?

Generally, there isn’t an exact causation, but Anaplastic Thyroid Cancer can sometimes develop from pre-existing differentiated thyroid cancers, such as papillary or follicular thyroid cancer, especially if they go untreated or mutate over time. These differentiated thyroid cancers can destabilize and ultimately come to anaplastic thyroid cancer. The main risk factors for anaplastic cancer mainly include an age older than 65,  history of radiation exposure to the chest or neck, or a long-standing goiter, which in simple terms is an enlarged thyroid. 

## Diagnosis:

Due to its extremely aggressive prognosis, all patients are diagnosed with stage IV of Anaplastic Thyroid Cancers. However, Stage IV is further divided into three substages based on the extent of spread. In Stage IVA, which accounts for about 10% of cases, the cancer is confined to the thyroid gland. In Stage IVB, seen in roughly 40% of cases, the cancer has spread to nearby structures such as lymph nodes in the neck. Stage IVC, the most common form at approximately 50% of cases, involves cancer that has metastasized to distant organs like the lungs, bones, or brain.

## Common Signs and Symptoms

Due to the location of ATC, Many patients with the cancer report compressive symptoms such as  increased effort required for swallowing, sensation of food and pills getting stuck while being swallowed, increased pressure on trachea  or shortness of breath while laying down. A rock-hard mass is often noticeable in the neck or upper chest. As the cancer progresses, it may invade surrounding structures, leading to hoarseness, further difficulty in swallowing, and the appearance of enlarged lymph nodes.

## Diagnosing the Disease:

Healthcare providers perform a fine needle aspiration, also known as a needle biopsy, to diagnose ATC. First, they take a small tissue sample from the thyroid mass, using a thin needle. In some cases, they may require a core biopsy using a larger needle. Then, they look at the tissue under a microscope to see if there are cancer cells. If cancer is detected, further analysis is done to identify the specific type or classification of thyroid cancer. Once the patient has been diagnosed, doctors will ask for tests to assess your health to determine if and where the cancer will spread, with the assistance of the following scans: CT scans, MRI scans, and F-fluorodeoxyglucose PET Scans

## Management and Treatment of ATC

Anaplastic thyroid cancer is hard to treat because it is extremely aggressive and has a long metastasis, spreading quickly in your neck and to distant parts of your body. Treatments involve a combination of certain procedures, such as surgery, chemotherapy, radiotherapy, Palliative care, and a multidisciplinary team of endocrinologists, medical oncologists, radiation oncologists, surgeons, etc.

### Surgery
Surgery is the most likely recommendation to remove the tumor unless afflicted with another medical condition. Debulking surgery is the most common as  it surgically removes as much of the tumor as possible, especially any part threatening your airway. It aims to keep your larynx or voice box intact. Unfortunately, surgery isn’t possible due to certain complications, including if the tumor is too large, in a sensitive location or too invasive. 

### Chemotherapy
Chemotherapy works by destroying cancer cells and preventing them from multiplying. It is typically used after surgery or in combination with radiation therapy to enhance its effectiveness, making the cancer more susceptible to radiation. While chemotherapy cannot cure Anaplastic Thyroid Cancer, it may help slow down or temporarily reverse tumor growth. Newer drugs are becoming more available and effective for advanced cases. Common chemotherapy drugs include taxanes (such as paclitaxel or docetaxel), anthracyclines (like doxorubicin), and platinum analogs (such as cisplatin or carboplatin).

### Radiation therapy
Radiation therapy uses high-energy beams to kill or halt the growth of cancer cells. The most commonly recommended form is External Beam Radiation Therapy (EBRT), which targets focused X-rays directly at the tumor or affected areas. Radiation can be used alongside chemotherapy or as a standalone treatment if surgery isn’t possible.
### Palliative care
Palliative care focuses on relieving the pain, symptoms, and emotional stress caused by ATC. It is often recommended to manage symptoms and side effects during advanced stages of the disease. Supportive measures may include placing a tracheostomy tube in the throat to help with breathing, inserting a feeding tube in the stomach for nutrition, and using pain management medications to improve the patient’s comfort and quality of life.
## Reference
Anaplastic Thyroid Cancer. American Thyroid Association. (n.d.). 
	https://www.thyroid.org/anaplastic-thyroid-cancer/ 
Anaplastic thyroid Cancer (ATC). (2025, March 19). Cleveland Clinic.
  https://my.clevelandclinic.org/health/diseases/23539-anaplastic-thyroid-cancer-atc
Anaplastic Thyroid Cancer | Columbia University Department of Surgery. (n.d.). Columbiasurgery.org. 
  https://columbiasurgery.org/conditions-and-treatments/anaplastic-thyroid-cancer
  `,
  coverImage: "/logo.png",
  date: "April 5, 2025",
  author: authors["muhammad-lari"],
  topic: "Cancer",
  readingTime: "8 min read",
},
//Chemotherapy and effects
{
  slug: "effects-chemotherapy",
  title: "The History and Impact of Chemotherapy",
  excerpt:
    "Trace the fascinating evolution of chemotherapy from its origins in World War I to modern targeted approaches, and understand its transformative impact on cancer treatment.",
  content: `
# The History and Impact of Chemotherapy

 Chemotherapy is a medical treatment that uses powerful drugs to kill rapidly growing cells in the body. It is most commonly used to treat cancer because cancer cells grow and multiply faster than most normal cells. Chemotherapy can be administered as a primary treatment, in combination with other therapies, or to relieve symptoms of cancer.

## How Chemotherapy Works

 Cancer cells divide uncontrollably, which makes them different from most normal cells. Chemotherapy works by destroying these fast-growing cells and preventing them from multiplying. There are several ways in which chemotherapy is used such as adjuvant therapy which is used after surgery or radiation to eliminate any remaining cancer cells, curative therapy aim to remove cancer completely so that it does not return, neoadjuvant therapy shrinks a tumor before surgery or radiation, and palliative therapy helps shrink tumors and reduce symptoms without curing the cancer. While chemotherapy is an effective way to treat cancer, it also affects other fast-growing cells in the body, such as those in the blood, digestive system, and hair follicles. This can lead to side effects like hair loss, nausea, fatigue, and anemia.

## The Origins of Chemotherapy

 Chemotherapy was first developed in the early 20th century, though not originally for cancer treatment. During World War II, scientists observed that people exposed to nitrogen mustard had lower white blood cell counts. This led researchers to investigate whether mustard agents could be used to target rapidly dividing cells, including cancer cells. In the 1940s, pharmacologists Alfred Gilman and Louis Goodman at Yale University tested the effects of nitrogen mustard on lymphoma. They found that injecting a patient with a modified form of mustard gas, called mustine, caused the tumor to shrink. Although the tumor eventually grew back, this study marked the beginning of using chemical agents to treat cancer. Their findings were published in 1946, and nitrogen mustard became a widely used treatment for lymphomas in the United States.

## Advancements in Chemotherapy

 After World War II, researchers continued to search for effective chemotherapy agents. Sidney Farber, a pathologist at Harvard Medical School, studied the effects of folic acid, a vitamin needed for DNA production. He and his team developed folate analogues, such as methotrexate, which blocked the action of folic acid. These drugs successfully induced remission in children with acute lymphoblastic leukemia in 1948. During the 1950s and 1960s, further advancements were made. The pharmaceutical company Eli Lilly discovered that plant alkaloids from the periwinkle plant, Vinca rosea, were effective against leukemia. This led to the development of vinca alkaloids, such as vinblastine for Hodgkin’s disease and vincristine for pediatric leukemia. Over the following decades, combination chemotherapy became popular. Using multiple drugs with different mechanisms increased survival rates and reduced mortality. Since 1990, cancer death rates have steadily declined due to early detection and the development of more effective chemotherapy treatments.
 
## Conclusion

 Chemotherapy has a long and evolving history. From its accidental discovery during wartime to the targeted treatments used today, it has revolutionized cancer care. While chemotherapy still has side effects, continuous research has improved its effectiveness and reduced its risks. Today, chemotherapy remains a critical tool in the fight against cancer, saving and prolonging lives around the world.

`,
  coverImage: "/logo.png",
  date: "April 3, 2025",
  author: authors["maliha-metla"],
  topic: "Cancer",
  readingTime: "11 min read",
},
// Nephrologist
{
  slug: "nephrologist",
  title: "Nephrologist",
  excerpt:
    "Nephrologists are doctors who treat kidney conditions like kidney failure, stones, and chronic kidney disease. They also manage related issues like high blood pressure and help oversee dialysis and transplants.",
  content: `
# Nephrologists Explained: Experts in Kidney Disease


## What are Nephrologists?

Nephrologists are medical professionals who specialize in diagnosing and treating kidney-related conditions. These could include kidney stones, kidney failure, and chronic kidney disease. They also manage complications caused by kidney dysfunction, such as hypertension and cardiovascular diseases. Nephrologists also play a crucial role in overseeing dialysis treatments, kidney transplants, and post-treatment care. They are often confused with Urologists who also deal with kidney health along with the bladder and reproductive organs. However, Urologists are trained in surgery, whereas Nephrologists typically are not. Despite their significance in kidney health, there are just over 10,000 practicing Nephrologists in the United States, which is relatively low considering the demand for kidney care.

## Types of Nephrologists:

Nephrology is a diverse field with several subspecialties. There are Pediatric Nephrologists who specialize in treating kidney-related issues in children and teenagers. As well as Interventional Nephrologists who preform minimally invasive procedures for dialysis patients, such as placing stents and removing catheters. There are multiple other types such as: transplant Nephrologists, critical care Nephrologists, Geriatric Nephrologists, Onco-Nephrologists, etc.

## How to Become a Nephrologist

The path to becoming a Nephrologists is quite extensive and requires years of training. It starts with four years of medical school, followed by a three-year residency in internal medicine, then they must complete a 2-3 year fellowship in Nephrology. To conclude their journey, they must pass a board certification exam to practice professionally.

## Case Study: Treating ICGN:
A rare but serious kidney condition known as Immune Complex-Mediated Glomerulonephritis (ICGN), occurs when immune complexes become intertwined in the kidney's glomeruli (tiny filters), which causes inflammation and kidney dysfunction. 
When a 57-year-old man was diagnosed with subacute bacterial endocarditis caused by Streptococcus mutans he developed ICGN. Despite receiving the standard treatment his kidney dysfunction worsened. To help treat him, the doctors introduced plasmapheresis, which is a procedure that removes immune complexes from the blood. And after seven sessions, the patients kidney health significantly improved, demonstrating the potential effectiveness of plasmapheresis in select cases.

## Conclusion
Nephrologists play a vital role in managing kidney health and preventing complications that affect other organs. Their expertise extends to various subspecialties, from pediatric care to kidney transplants. While nephrology often involves non-surgical treatments, advancements in the field continue to improve outcomes for patients with complex kidney disorders.
`,
  coverImage: "/logo.png",
  date: "April 1, 2025",
  author: authors["shaza-ali"],
  topic: "Cancer",
  readingTime: "9 min read",
},
//Eosinophils	
{
   slug: "eosinophils",
  title: "Once Known Only for Fighting Allergies and Parasites, Eosinophils Are Now Emerging as Unexpected Players in the Cancer Battlefield!",
  excerpt: "Explore how eosinophils, once known for their role in allergies and parasites, are now influencing cancer outcomes—sometimes acting as defenders, other times as accomplices in tumor progression.",
  content: `
# Can Allergy Cells Fight Cancer? The Surprising Role of Eosinophils

The immune system is our body’s first line of defense against infections and abnormal cell growth, including cancer. Among its many components are **eosinophils**, which play a crucial role not only in fighting parasites and allergens but also in influencing cancer outcomes. Recent studies have revealed their surprising involvement in the **tumor microenvironment**, positioning eosinophils as both potential defenders and accomplices in cancer progression.

## Meet Eosinophils: Tiny Cells with Big Responsibilities

Eosinophils are a type of white blood cell that belong to the **granulocyte** family, alongside neutrophils and basophils. They are characterized by bright red-orange granules filled with toxic proteins and account for about 5% of the body’s white blood cells. Found in the blood, bone marrow, lungs, skin, fat, and digestive tract, eosinophils are best known for combating **parasitic infections** and participating in allergic reactions. They also help regulate inflammation by releasing **cytokines** and **signaling molecules**.

## What Is Cancer? Understanding the Basics

Cancer refers to a group of diseases characterized by the uncontrolled division of abnormal cells, which can invade nearby tissues and spread to other parts of the body. It often results from **genetic mutations** that disrupt the normal processes of cell growth and death. While some cancers form solid tumors, others, like **leukemia**, do not. Treatments vary widely and may include surgery, chemotherapy, radiation therapy, immunotherapy, or targeted drugs.

## Eosinophils and Cancer: A Complex Relationship

Though eosinophils and cancer might seem unrelated at first glance, research has revealed a **complex and dynamic relationship** between the two. Eosinophils can infiltrate tumors and directly engage with cancer cells, releasing cytotoxic proteins such as **reactive oxygen species (ROS)**, **major basic protein (MBP)**, and **eosinophil cationic protein (ECP)**. These substances can induce tumor cell death, suggesting a possible **tumor-suppressive role** for eosinophils.

## The Impact of Eosinophils on Tumor Growth

Beyond their direct attack on cancer cells, eosinophils influence the tumor environment by secreting **cytokines** and **growth factors**. Interestingly, while some of these molecules—such as **interleukin-6 (IL-6)** and **APRIL**—can promote tumor growth, others support immune activation. Eosinophils also interact with other immune cells, presenting antigens to T cells, guiding their activation, and releasing chemokines to recruit more immune cells to the tumor site. These activities can potentially strengthen the body’s anti-cancer response.

Moreover, eosinophils improve **tumor blood flow** and reduce vascular leakiness, which may enhance the effectiveness of therapies. For example, in **colorectal cancer**, higher eosinophil levels within tumors have been associated with better outcomes, reinforcing their potential as key players in cancer defense.

## Conclusion: The Dual Nature of Eosinophils in Cancer

In conclusion, eosinophils are far more than simple defenders against parasites and allergens. Their involvement in cancer highlights their **dual nature**—capable of both hindering and helping tumor progression, depending on the context. As our understanding of these versatile cells deepens, eosinophils could hold promise not only as markers of prognosis but also as potential targets or tools in future cancer therapies.
`,
    coverImage: "/eosinophils.png",
    date: "April 13, 2025",
    author: authors["shaza-ali"],
    topic: "Cancer",
    readingTime: "11 min read",
  },
  
]

// Helper functions
export const getPostsByTopic = (topic: string): BlogPost[] => {
  return blogPosts.filter((post) => post.topic === topic)
}

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured)
}

export const getRecentPosts = (count = 3): BlogPost[] => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}

export const getRelatedPosts = (currentSlug: string, count = 3): BlogPost[] => {
  const currentPost = blogPosts.find((post) => post.slug === currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.topic === currentPost.topic)
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
}
