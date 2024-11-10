const muscles = [
  {
    name: "Respiratory Diaphragm",
    origin: ["Sternum", "Ribs", "Lumbar Vertebrae"],
    insertion: ["Central Tendon"],
  },
  {
    name: "External Intercostal",
    origin: ["Ribs"],
    insertion: ["Ribs"],
  },
  {
    name: "Innermost Intercostal",
    origin: ["Ribs"],
    insertion: ["Ribs"],
  },
  {
    name: "Internal Intercostal",
    origin: ["Ribs"],
    insertion: ["Ribs"],
  },
  {
    name: "Levator Costarum",
    origin: ["Thoracic Vertebrae"],
    insertion: ["Ribs"],
  },
  {
    name: "Pectoralis Major",
    origin: ["Clavicle", "Sternum", "Ribs"],
    insertion: ["Humerus"],
  },
  {
    name: "Pectoralis Minor",
    origin: ["Ribs"],
    insertion: ["Scapula"],
  },
  {
    name: "Serratus Anterior",
    origin: ["Ribs"],
    insertion: ["Scapula"],
  },
  {
    name: "Serratus Posterior Inferior",
    origin: ["Thoracic Vertebrae", "Lumbar Vertebrae"],
    insertion: ["Ribs"],
  },
  {
    name: "Serratus Posterior Superior",
    origin: ["Thoracic Vertebrae", "Cervical Vertebrae"],
    insertion: ["Ribs"],
  },
  {
    name: "Subcostal",
    origin: ["Ribs"],
    insertion: ["Ribs"],
  },
  {
    name: "Transversus Thoracis",
    origin: ["Sternum"],
    insertion: ["Ribs"],
  },
  {
    name: "Erector Spinae",
    origin: ["Sacrum", "Ilium", "Vertebrae"],
    insertion: ["Ribs", "Vertebrae", "Occipital Bone"],
  },
  {
    name: "Interspinales (Cervical, Thoracic, Lumbar)",
    origin: ["Vertebrae"],
    insertion: ["Vertebrae"],
  },
  {
    name: "Intertransversarii (Cervical, Thoracic, Lumbar)",
    origin: ["Vertebrae"],
    insertion: ["Vertebrae"],
  },
  {
    name: "Latissimus Dorsi",
    origin: ["Thoracic Vertebrae", "Lumbar Vertebrae", "Ilium", "Sacrum"],
    insertion: ["Humerus"],
  },
  {
    name: "Levator Scapulae",
    origin: ["Cervical Vertebrae"],
    insertion: ["Scapula"],
  },
  {
    name: "Multifidus",
    origin: ["Sacrum", "Ilium", "Vertebrae"],
    insertion: ["Vertebrae"],
  },
  {
    name: "Obliquus Capitis Inferior",
    origin: ["Atlas Vertebra"],
    insertion: ["Axis Vertebra"],
  },
  {
    name: "Obliquus Capitis Superior",
    origin: ["Atlas Vertebra"],
    insertion: ["Occipital Bone"],
  },
  {
    name: "Rectus Capitis Posterior Major",
    origin: ["Axis Vertebra"],
    insertion: ["Occipital Bone"],
  },
  {
    name: "Rectus Capitis Posterior Minor",
    origin: ["Atlas Vertebra"],
    insertion: ["Occipital Bone"],
  },
  {
    name: "Rhomboid Major",
    origin: ["Thoracic Vertebrae"],
    insertion: ["Scapula"],
  },
  {
    name: "Rhomboid Minor",
    origin: ["Cervical Vertebrae", "Thoracic Vertebrae"],
    insertion: ["Scapula"],
  },
  {
    name: "Rotatores",
    origin: ["Vertebrae"],
    insertion: ["Spinous Processes of Vertebrae"],
  },
  {
    name: "Semispinalis",
    origin: ["Thoracic Vertebrae", "Cervical Vertebrae"],
    insertion: ["Occipital Bone", "Cervical Vertebrae"],
  },
  {
    name: "Serratus Posterior Inferior",
    origin: ["Thoracic Vertebrae", "Lumbar Vertebrae"],
    insertion: ["Ribs"],
  },
  {
    name: "Serratus Posterior Superior",
    origin: ["Thoracic Vertebrae", "Cervical Vertebrae"],
    insertion: ["Ribs"],
  },
  {
    name: "Splenius Capitis",
    origin: ["Cervical Vertebrae", "Thoracic Vertebrae"],
    insertion: ["Occipital Bone", "Temporal Bone"],
  },
  {
    name: "Splenius Cervicis",
    origin: ["Thoracic Vertebrae"],
    insertion: ["Cervical Vertebrae"],
  },
  {
    name: "Trapezius",
    origin: ["Occipital Bone", "Cervical Vertebrae", "Thoracic Vertebrae"],
    insertion: ["Clavicle", "Scapula"],
  },
  {
    name: "External Abdominal Oblique",
    origin: ["Ribs"],
    insertion: ["Ilium", "Linea Alba"],
  },
  {
    name: "Internal Abdominal Oblique",
    origin: ["Ilium", "Inguinal Ligament"],
    insertion: ["Ribs", "Linea Alba", "Pubis"],
  },
  {
    name: "Psoas Major",
    origin: ["Lumbar Vertebrae"],
    insertion: ["Femur"],
  },
  {
    name: "Psoas Minor",
    origin: ["Lumbar Vertebrae"],
    insertion: ["Pubis"],
  },
  {
    name: "Pyramidalis",
    origin: ["Pubis"],
    insertion: ["Linea Alba"],
  },
  {
    name: "Quadratus Lumborum",
    origin: ["Ilium"],
    insertion: ["Ribs", "Lumbar Vertebrae"],
  },
  {
    name: "Rectus Abdominis",
    origin: ["Pubis"],
    insertion: ["Sternum", "Ribs"],
  },
  {
    name: "Transversus Abdominis",
    origin: ["Ilium", "Ribs", "Inguinal Ligament"],
    insertion: ["Linea Alba", "Pubis"],
  },
  {
    name: "Abductor Digiti Minimi",
    origin: ["Carpals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Abductor Pollicis Brevis",
    origin: ["Carpals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Abductor Pollicis Longus",
    origin: ["Ulna", "Radius"],
    insertion: ["Metacarpal 1"],
  },
  {
    name: "Adductor Pollicis",
    origin: ["Metacarpals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Anconeus",
    origin: ["Humerus"],
    insertion: ["Ulna"],
  },
  {
    name: "Biceps Brachii",
    origin: ["Scapula"],
    insertion: ["Radius"],
  },
  {
    name: "Brachialis",
    origin: ["Humerus"],
    insertion: ["Ulna"],
  },
  {
    name: "Brachioradialis",
    origin: ["Humerus"],
    insertion: ["Radius"],
  },
  {
    name: "Coracobrachialis",
    origin: ["Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Deltoid",
    origin: ["Clavicle", "Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Dorsal Interosseous Muscles",
    origin: ["Metacarpals"],
    insertion: ["Proximal Phalanges"],
  },
  {
    name: "Extensor Carpi Radialis Brevis",
    origin: ["Humerus"],
    insertion: ["Metacarpals"],
  },
  {
    name: "Extensor Carpi Radialis Longus",
    origin: ["Humerus"],
    insertion: ["Metacarpals"],
  },
  {
    name: "Extensor Carpi Ulnaris",
    origin: ["Humerus", "Ulna"],
    insertion: ["Metacarpal 5"],
  },
  {
    name: "Extensor Digiti Minimi",
    origin: ["Humerus"],
    insertion: ["Phalanges"],
  },
  {
    name: "Extensor Digitorum",
    origin: ["Humerus"],
    insertion: ["Phalanges"],
  },
  {
    name: "Extensor Indicis",
    origin: ["Ulna"],
    insertion: ["Phalanges"],
  },
  {
    name: "Extensor Pollicis Brevis",
    origin: ["Radius"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Extensor Pollicis Longus",
    origin: ["Ulna"],
    insertion: ["Distal Phalanx"],
  },
  {
    name: "Flexor Carpi Radialis",
    origin: ["Humerus"],
    insertion: ["Metacarpals"],
  },
  {
    name: "Flexor Carpi Ulnaris",
    origin: ["Humerus", "Ulna"],
    insertion: ["Carpals", "Metacarpals"],
  },
  {
    name: "Flexor Digiti Minimi Brevis",
    origin: ["Carpals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Flexor Digitorum Profundus",
    origin: ["Ulna"],
    insertion: ["Distal Phalanges"],
  },
  {
    name: "Flexor Digitorum Superficialis",
    origin: ["Humerus", "Ulna", "Radius"],
    insertion: ["Middle Phalanges"],
  },
  {
    name: "Flexor Pollicis Brevis",
    origin: ["Carpals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Flexor Pollicis Longus",
    origin: ["Radius"],
    insertion: ["Distal Phalanx"],
  },
  {
    name: "Infraspinatus",
    origin: ["Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Latissimus Dorsi",
    origin: ["Thoracic Vertebrae", "Lumbar Vertebrae", "Sacrum", "Ilium"],
    insertion: ["Humerus"],
  },
  {
    name: "Levator Scapulae",
    origin: ["Cervical Vertebrae"],
    insertion: ["Scapula"],
  },
  {
    name: "Lumbrical (First and Second)",
    origin: ["Flexor Digitorum Profundus"],
    insertion: ["Extensor Expansions"],
  },
  {
    name: "Lumbrical (Third and Fourth)",
    origin: ["Flexor Digitorum Profundus"],
    insertion: ["Extensor Expansions"],
  },
  {
    name: "Opponens Digiti Minimi",
    origin: ["Carpals"],
    insertion: ["Metacarpal 5"],
  },
  {
    name: "Opponens Pollicis",
    origin: ["Carpals"],
    insertion: ["Metacarpal 1"],
  },
  {
    name: "Palmar Interosseous Muscles",
    origin: ["Metacarpals"],
    insertion: ["Proximal Phalanges"],
  },
  {
    name: "Palmaris Brevis",
    origin: ["Palmar Aponeurosis"],
    insertion: ["Skin of Hand"],
  },
  {
    name: "Palmaris Longus",
    origin: ["Humerus"],
    insertion: ["Palmar Aponeurosis"],
  },
  {
    name: "Pectoralis Major",
    origin: ["Clavicle", "Sternum", "Ribs"],
    insertion: ["Humerus"],
  },
  {
    name: "Pectoralis Minor",
    origin: ["Ribs"],
    insertion: ["Scapula"],
  },
  {
    name: "Pronator Quadratus",
    origin: ["Ulna"],
    insertion: ["Radius"],
  },
  {
    name: "Pronator Teres",
    origin: ["Humerus", "Ulna"],
    insertion: ["Radius"],
  },
  {
    name: "Subclavius",
    origin: ["Rib 1"],
    insertion: ["Clavicle"],
  },
  {
    name: "Subscapularis",
    origin: ["Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Supinator",
    origin: ["Humerus", "Ulna"],
    insertion: ["Radius"],
  },
  {
    name: "Supraspinatus",
    origin: ["Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Teres Major",
    origin: ["Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Teres Minor",
    origin: ["Scapula"],
    insertion: ["Humerus"],
  },
  {
    name: "Trapezius",
    origin: ["Occipital Bone", "Cervical Vertebrae", "Thoracic Vertebrae"],
    insertion: ["Clavicle", "Scapula"],
  },
  {
    name: "Triceps Brachii",
    origin: ["Scapula", "Humerus"],
    insertion: ["Ulna"],
  },
  {
    name: "Abductor Digiti Minimi",
    origin: ["Calcaneus"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Abductor Hallucis",
    origin: ["Calcaneus"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Adductor Brevis",
    origin: ["Pubis"],
    insertion: ["Femur"],
  },
  {
    name: "Adductor Hallucis",
    origin: ["Metatarsals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Adductor Longus",
    origin: ["Pubis"],
    insertion: ["Femur"],
  },
  {
    name: "Adductor Magnus",
    origin: ["Pubis", "Ischium"],
    insertion: ["Femur"],
  },
  {
    name: "Articularis Genus",
    origin: ["Femur"],
    insertion: ["Knee Capsule"],
  },
  {
    name: "Biceps Femoris",
    origin: ["Ischium", "Femur"],
    insertion: ["Fibula"],
  },
  {
    name: "Dorsal Interossei",
    origin: ["Metatarsals"],
    insertion: ["Proximal Phalanges"],
  },
  {
    name: "Extensor Digitorum Brevis",
    origin: ["Calcaneus"],
    insertion: ["Middle Phalanges"],
  },
  {
    name: "Extensor Digitorum Longus",
    origin: ["Tibia", "Fibula"],
    insertion: ["Phalanges"],
  },
  {
    name: "Extensor Hallucis Longus",
    origin: ["Fibula"],
    insertion: ["Distal Phalanx"],
  },
  {
    name: "Fibularis Brevis",
    origin: ["Fibula"],
    insertion: ["Metatarsal 5"],
  },
  {
    name: "Fibularis Longus",
    origin: ["Fibula"],
    insertion: ["Medial Cuneiform", "Metatarsal 1"],
  },
  {
    name: "Fibularis Tertius",
    origin: ["Fibula"],
    insertion: ["Metatarsal 5"],
  },
  {
    name: "Flexor Digiti Minimi Brevis",
    origin: ["Metatarsals"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Flexor Digitorum Brevis",
    origin: ["Calcaneus"],
    insertion: ["Middle Phalanges"],
  },
  {
    name: "Flexor Digitorum Longus",
    origin: ["Tibia"],
    insertion: ["Distal Phalanges"],
  },
  {
    name: "Flexor Hallucis Brevis",
    origin: ["Cuboid", "Cuneiforms"],
    insertion: ["Proximal Phalanx"],
  },
  {
    name: "Flexor Hallucis Longus",
    origin: ["Fibula"],
    insertion: ["Distal Phalanx"],
  },
  {
    name: "Gastrocnemius",
    origin: ["Femur"],
    insertion: ["Calcaneus"],
  },
  {
    name: "Gluteus Maximus",
    origin: ["Ilium", "Sacrum", "Coccyx"],
    insertion: ["Femur"],
  },
  {
    name: "Gluteus Medius",
    origin: ["Ilium"],
    insertion: ["Femur"],
  },
  {
    name: "Gluteus Minimus",
    origin: ["Ilium"],
    insertion: ["Femur"],
  },
  {
    name: "Gracilis",
    origin: ["Pubis"],
    insertion: ["Tibia"],
  },
  {
    name: "Iliacus (Iliopsoas)",
    origin: ["Ilium"],
    insertion: ["Femur"],
  },
  {
    name: "Inferior Gemellus",
    origin: ["Ischium"],
    insertion: ["Femur"],
  },
  {
    name: "Lumbricals",
    origin: ["Flexor Digitorum Longus"],
    insertion: ["Extensor Expansions"],
  },
  {
    name: "Obturator Externus",
    origin: ["Pubis", "Ischium"],
    insertion: ["Femur"],
  },
  {
    name: "Obturator Internus",
    origin: ["Ischium"],
    insertion: ["Femur"],
  },
  {
    name: "Pectineus",
    origin: ["Pubis"],
    insertion: ["Femur"],
  },
  {
    name: "Piriformis",
    origin: ["Sacrum"],
    insertion: ["Femur"],
  },
  {
    name: "Plantar Interossei",
    origin: ["Metatarsals"],
    insertion: ["Proximal Phalanges"],
  },
  {
    name: "Plantaris",
    origin: ["Femur"],
    insertion: ["Calcaneus"],
  },
  {
    name: "Popliteus",
    origin: ["Femur"],
    insertion: ["Tibia"],
  },
  {
    name: "Psoas Major (Iliopsoas)",
    origin: ["Lumbar Vertebrae"],
    insertion: ["Femur"],
  },
  {
    name: "Quadratus Femoris",
    origin: ["Ischium"],
    insertion: ["Femur"],
  },
  {
    name: "Quadratus Plantae",
    origin: ["Calcaneus"],
    insertion: ["Flexor Digitorum Longus"],
  },
  {
    name: "Rectus Femoris (Quadriceps)",
    origin: ["Ilium"],
    insertion: ["Tibia"],
  },
  {
    name: "Sartorius",
    origin: ["Ilium"],
    insertion: ["Tibia"],
  },
  {
    name: "Semimembranosus",
    origin: ["Ischium"],
    insertion: ["Tibia"],
  },
  {
    name: "Semitendinosus",
    origin: ["Ischium"],
    insertion: ["Tibia"],
  },
  {
    name: "Soleus",
    origin: ["Tibia", "Fibula"],
    insertion: ["Calcaneus"],
  },
  {
    name: "Superior Gemellus",
    origin: ["Ischium"],
    insertion: ["Femur"],
  },
  {
    name: "Tensor Fasciae Latae",
    origin: ["Ilium"],
    insertion: ["Iliotibial Tract"],
  },
  {
    name: "Tibialis Anterior",
    origin: ["Tibia"],
    insertion: ["Medial Cuneiform", "Metatarsal 1"],
  },
  {
    name: "Tibialis Posterior",
    origin: ["Tibia", "Fibula"],
    insertion: ["Tarsals", "Metatarsals"],
  },
  {
    name: "Vastus Intermedius (Quadriceps)",
    origin: ["Femur"],
    insertion: ["Tibia"],
  },
  {
    name: "Vastus Lateralis (Quadriceps)",
    origin: ["Femur"],
    insertion: ["Tibia"],
  },
  {
    name: "Vastus Medialis (Quadriceps)",
    origin: ["Femur"],
    insertion: ["Tibia"],
  },
  {
    name: "Bulbospongiosus",
    origin: ["Perineal Body"],
    insertion: ["Perineal Membrane"],
  },
  {
    name: "Coccygeus",
    origin: ["Ischium"],
    insertion: ["Sacrum", "Coccyx"],
  },
  {
    name: "Compressor Urethrae (Female Only)",
    origin: ["Ischium"],
    insertion: ["Urethra"],
  },
  {
    name: "Cremaster",
    origin: ["Inguinal Ligament"],
    insertion: ["Spermatic Cord"],
  },
  {
    name: "Deep Transverse Perineal",
    origin: ["Ischium"],
    insertion: ["Perineal Body"],
  },
  {
    name: "External Anal Sphincter",
    origin: ["Anococcygeal Ligament"],
    insertion: ["Perineal Body"],
  },
  {
    name: "Iliacus",
    origin: ["Ilium"],
    insertion: ["Femur"],
  },
  {
    name: "Ischiocavernosus",
    origin: ["Ischium"],
    insertion: ["Clitoris", "Penis"],
  },
  {
    name: "Levator Ani (Iliococcygeus, Pubococcygeus, and Puboanalis)",
    origin: ["Pubis", "Ischium"],
    insertion: ["Coccyx", "Perineal Body"],
  },
  {
    name: "Obturator Internus",
    origin: ["Ischium", "Pubis"],
    insertion: ["Femur"],
  },
  {
    name: "Piriformis",
    origin: ["Sacrum"],
    insertion: ["Femur"],
  },
  {
    name: "Sphincter Urethrae",
    origin: ["Ischium"],
    insertion: ["Urethra"],
  },
  {
    name: "Sphincter Urethrovaginalis (Female Only)",
    origin: ["Perineal Body"],
    insertion: ["Urethra", "Vagina"],
  },
  {
    name: "Superficial Transverse Perineal",
    origin: ["Ischium"],
    insertion: ["Perineal Body"],
  },
  {
    name: "Auricularis Anterior",
    origin: ["Temporal Fascia"],
    insertion: ["Auricle"],
  },
  {
    name: "Auricularis Posterior",
    origin: ["Mastoid Process"],
    insertion: ["Auricle"],
  },
  {
    name: "Auricularis Superior",
    origin: ["Temporal Fascia"],
    insertion: ["Auricle"],
  },
  {
    name: "Buccinator",
    origin: ["Maxilla", "Mandible"],
    insertion: ["Orbicularis Oris"],
  },
  {
    name: "Ciliary",
    origin: ["Sclera"],
    insertion: ["Lens"],
  },
  {
    name: "Corrugator Supercilii",
    origin: ["Frontal Bone"],
    insertion: ["Skin of Eyebrows"],
  },
  {
    name: "Cricothyroid",
    origin: ["Cricoid Cartilage"],
    insertion: ["Thyroid Cartilage"],
  },
  {
    name: "Depressor Anguli Oris",
    origin: ["Mandible"],
    insertion: ["Orbicularis Oris"],
  },
  {
    name: "Depressor Labii Inferioris",
    origin: ["Mandible"],
    insertion: ["Skin of Lower Lip"],
  },
  {
    name: "Depressor Septi Nasi",
    origin: ["Maxilla"],
    insertion: ["Nasal Septum"],
  },
  {
    name: "Digastric",
    origin: ["Mandible", "Temporal Bone"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Dilator Pupillae",
    origin: ["Iris"],
    insertion: ["Iris"],
  },
  {
    name: "Frontal Belly of Occipitofrontalis",
    origin: ["Epicranial Aponeurosis"],
    insertion: ["Skin of Forehead"],
  },
  {
    name: "Genioglossus",
    origin: ["Mandible"],
    insertion: ["Tongue"],
  },
  {
    name: "Geniohyoid",
    origin: ["Mandible"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Hyoglossus",
    origin: ["Hyoid Bone"],
    insertion: ["Tongue"],
  },
  {
    name: "Inferior Longitudinal Lingual Muscle",
    origin: ["Tongue"],
    insertion: ["Tongue"],
  },
  {
    name: "Inferior Oblique",
    origin: ["Orbital Floor"],
    insertion: ["Sclera"],
  },
  {
    name: "Inferior Pharyngeal Constrictor",
    origin: ["Thyroid Cartilage"],
    insertion: ["Pharyngeal Raphe"],
  },
  {
    name: "Inferior Rectus",
    origin: ["Sphenoid"],
    insertion: ["Sclera"],
  },
  {
    name: "Lateral Cricoarytenoid",
    origin: ["Cricoid Cartilage"],
    insertion: ["Arytenoid Cartilage"],
  },
  {
    name: "Lateral Pterygoid",
    origin: ["Sphenoid Bone"],
    insertion: ["Mandibular Condyle"],
  },
  {
    name: "Lateral Rectus",
    origin: ["Sphenoid"],
    insertion: ["Sclera"],
  },
  {
    name: "Levator Anguli Oris",
    origin: ["Maxilla"],
    insertion: ["Orbicularis Oris"],
  },
  {
    name: "Levator Labii Superioris Alaeque Nasi",
    origin: ["Maxilla"],
    insertion: ["Upper Lip", "Nose"],
  },
  {
    name: "Levator Labii Superioris",
    origin: ["Maxilla"],
    insertion: ["Skin of Upper Lip"],
  },
  {
    name: "Levator Palpebrae Superioris",
    origin: ["Sphenoid"],
    insertion: ["Eyelid"],
  },
  {
    name: "Levator Veli Palatini",
    origin: ["Temporal Bone"],
    insertion: ["Palatine Aponeurosis"],
  },
  {
    name: "Longus Capitis",
    origin: ["Cervical Vertebrae"],
    insertion: ["Occipital Bone"],
  },
  {
    name: "Longus Colli",
    origin: ["Cervical Vertebrae", "Thoracic Vertebrae"],
    insertion: ["Cervical Vertebrae"],
  },
  {
    name: "Masseter",
    origin: ["Zygomatic Arch"],
    insertion: ["Mandible"],
  },
  {
    name: "Medial Pterygoid",
    origin: ["Sphenoid", "Palatine Bone"],
    insertion: ["Mandible"],
  },
  {
    name: "Medial Rectus",
    origin: ["Sphenoid"],
    insertion: ["Sclera"],
  },
  {
    name: "Mentalis",
    origin: ["Mandible"],
    insertion: ["Skin of Chin"],
  },
  {
    name: "Middle Pharyngeal Constrictor",
    origin: ["Hyoid Bone"],
    insertion: ["Pharyngeal Raphe"],
  },
  {
    name: "Musculus Uvulae",
    origin: ["Palatine Aponeurosis"],
    insertion: ["Uvula"],
  },
  {
    name: "Mylohyoid",
    origin: ["Mandible"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Nasalis",
    origin: ["Maxilla"],
    insertion: ["Nasal Cartilage"],
  },
  {
    name: "Occipital Belly (Occipitofrontalis)",
    origin: ["Occipital Bone"],
    insertion: ["Epicranial Aponeurosis"],
  },
  {
    name: "Omohyoid",
    origin: ["Scapula"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Orbicularis Oculi",
    origin: ["Frontal Bone", "Maxilla"],
    insertion: ["Skin Around the Eyes"],
  },
  {
    name: "Orbicularis Oris",
    origin: ["Maxilla", "Mandible"],
    insertion: ["Lips"],
  },
  {
    name: "Palatoglossus",
    origin: ["Palatine Aponeurosis"],
    insertion: ["Tongue"],
  },
  {
    name: "Palatopharyngeus",
    origin: ["Palatine Aponeurosis"],
    insertion: ["Pharyngeal Wall"],
  },
  {
    name: "Platysma",
    origin: ["Fascia of Chest"],
    insertion: ["Mandible"],
  },
  {
    name: "Posterior Cricoarytenoid",
    origin: ["Cricoid Cartilage"],
    insertion: ["Arytenoid Cartilage"],
  },
  {
    name: "Procerus",
    origin: ["Nasal Bone"],
    insertion: ["Skin of Forehead"],
  },
  {
    name: "Rectus Capitis Anterior",
    origin: ["Atlas Vertebra"],
    insertion: ["Occipital Bone"],
  },
  {
    name: "Rectus Capitis Lateralis",
    origin: ["Atlas Vertebra"],
    insertion: ["Occipital Bone"],
  },
  {
    name: "Risorius",
    origin: ["Fascia Over Parotid Gland"],
    insertion: ["Corner of Mouth"],
  },
  {
    name: "Salpingopharyngeus",
    origin: ["Auditory Tube"],
    insertion: ["Pharyngeal Wall"],
  },
  {
    name: "Scalenus Anterior",
    origin: ["Cervical Vertebrae"],
    insertion: ["First Rib"],
  },
  {
    name: "Scalenus Medius",
    origin: ["Cervical Vertebrae"],
    insertion: ["First Rib"],
  },
  {
    name: "Scalenus Posterior",
    origin: ["Cervical Vertebrae"],
    insertion: ["Second Rib"],
  },
  {
    name: "Sphincter Pupillae",
    origin: ["Iris"],
    insertion: ["Iris"],
  },
  {
    name: "Stapedius",
    origin: ["Temporal Bone"],
    insertion: ["Stapes"],
  },
  {
    name: "Sternocleidomastoid",
    origin: ["Clavicle", "Sternum"],
    insertion: ["Mastoid Process"],
  },
  {
    name: "Sternohyoid",
    origin: ["Sternum"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Sternothyroid",
    origin: ["Sternum"],
    insertion: ["Thyroid Cartilage"],
  },
  {
    name: "Styloglossus",
    origin: ["Styloid Process"],
    insertion: ["Tongue"],
  },
  {
    name: "Stylohyoid",
    origin: ["Styloid Process"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Stylopharyngeus",
    origin: ["Styloid Process"],
    insertion: ["Pharyngeal Wall"],
  },
  {
    name: "Subclavius",
    origin: ["First Rib"],
    insertion: ["Clavicle"],
  },
  {
    name: "Superior Longitudinal Lingual Muscle",
    origin: ["Tongue"],
    insertion: ["Tongue"],
  },
  {
    name: "Superior Oblique",
    origin: ["Sphenoid"],
    insertion: ["Sclera"],
  },
  {
    name: "Superior Pharyngeal Constrictor",
    origin: ["Mandible", "Pterygoid Plate"],
    insertion: ["Pharyngeal Raphe"],
  },
  {
    name: "Superior Rectus",
    origin: ["Sphenoid"],
    insertion: ["Sclera"],
  },
  {
    name: "Temporalis",
    origin: ["Temporal Bone"],
    insertion: ["Mandible"],
  },
  {
    name: "Tensor Tympani",
    origin: ["Sphenoid", "Temporal Bone"],
    insertion: ["Malleus"],
  },
  {
    name: "Tensor Veli Palatini",
    origin: ["Sphenoid"],
    insertion: ["Palatine Aponeurosis"],
  },
  {
    name: "Thyroarytenoid",
    origin: ["Thyroid Cartilage"],
    insertion: ["Arytenoid Cartilage"],
  },
  {
    name: "Thyrohyoid",
    origin: ["Thyroid Cartilage"],
    insertion: ["Hyoid Bone"],
  },
  {
    name: "Transverse and Oblique Arytenoid",
    origin: ["Arytenoid Cartilage"],
    insertion: ["Arytenoid Cartilage"],
  },
  {
    name: "Transverse (Tongue)",
    origin: ["Tongue"],
    insertion: ["Tongue"],
  },
  {
    name: "Vertical (Tongue)",
    origin: ["Tongue"],
    insertion: ["Tongue"],
  },
  {
    name: "Vocalis",
    origin: ["Thyroid Cartilage"],
    insertion: ["Arytenoid Cartilage"],
  },
  {
    name: "Zygomaticus Major",
    origin: ["Zygomatic Bone"],
    insertion: ["Corner of Mouth"],
  },
  {
    name: "Zygomaticus Minor",
    origin: ["Zygomatic Bone"],
    insertion: ["Upper Lip"],
  },
];
