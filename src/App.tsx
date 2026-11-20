
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'

const featuredCars = [
  {
    name: 'Hyundai Creta',
    category: 'MID-SIZE SUV',
    price: '₹11.11–20.50 lakh',
    minPrice: 11.11,
    maxPrice: 20.50,
    detail: '5 seats · Petrol / Diesel',
    image:
      '/Carwise_Hyundai_Creta_JPG/Carwise_Hyundai_Creta/01_creta_rear_three_quarter.jpg',
    galleryImages: [
      '/Carwise_Hyundai_Creta_JPG/Carwise_Hyundai_Creta/01_creta_rear_three_quarter.jpg',
      '/Carwise_Hyundai_Creta_JPG/Carwise_Hyundai_Creta/02_creta_side_profile.jpg',
      '/Carwise_Hyundai_Creta_JPG/Carwise_Hyundai_Creta/03_creta_wheel_detail.jpg',
      '/Carwise_Hyundai_Creta_JPG/Carwise_Hyundai_Creta/04_creta_front_three_quarter.jpg',
    ],
  },
  {
    name: 'Tata Nexon',
    category: 'COMPACT SUV',
    price: '₹8.00–15.60 lakh',
    minPrice: 8.00,
    maxPrice: 15.60,
    detail: '5 seats · Petrol / Diesel / EV',
    image:
      '/Carwise_Tata_Nexon_JPG/Carwise_Tata_Nexon/01_nexon_interior.jpg',
    galleryImages: [
      '/Carwise_Tata_Nexon_JPG/Carwise_Tata_Nexon/01_nexon_interior.jpg',
      '/Carwise_Tata_Nexon_JPG/Carwise_Tata_Nexon/02_nexon_rear.jpg',
      '/Carwise_Tata_Nexon_JPG/Carwise_Tata_Nexon/03_nexon_sunroof_top_view.jpg',
      '/Carwise_Tata_Nexon_JPG/Carwise_Tata_Nexon/04_nexon_front_three_quarter.jpg',
    ],
  },
  {
    name: 'Honda City',
    category: 'SEDAN',
    price: '₹11.95–16.07 lakh',
    minPrice: 11.95,
    maxPrice: 16.07,
    detail: '5 seats · Petrol',
    image:
      '/Carwise_Honda_City_JPG/honda-city-exterior-three-quarter.jpg',
    galleryImages: [
      '/Carwise_Honda_City_JPG/honda-city-exterior-three-quarter.jpg',
      '/Carwise_Honda_City_JPG/honda-city-front-detail.jpg',
      '/Carwise_Honda_City_JPG/honda-city-rear-detail.jpg',
      '/Carwise_Honda_City_JPG/honda-city-wheel-detail.jpg',
    ],
  },
  {
    name: 'Maruti Suzuki Swift',
    category: 'HATCHBACK',
    price: '₹5.79–8.80 lakh',
    minPrice: 5.79,
    maxPrice: 8.80,
    detail: '5 seats · Petrol',
    image:
      '/Carwise_Maruti_Suzuki_Swift_JPG/Carwise_Maruti_Suzuki_Swift/01_swift_interior.jpg',
    galleryImages: [
      '/Carwise_Maruti_Suzuki_Swift_JPG/Carwise_Maruti_Suzuki_Swift/01_swift_interior.jpg',
      '/Carwise_Maruti_Suzuki_Swift_JPG/Carwise_Maruti_Suzuki_Swift/02_swift_front_exterior.jpg',
      '/Carwise_Maruti_Suzuki_Swift_JPG/Carwise_Maruti_Suzuki_Swift/03_swift_rear_blue.jpg',
      '/Carwise_Maruti_Suzuki_Swift_JPG/Carwise_Maruti_Suzuki_Swift/04_swift_rear_red.jpg',
    ],
  },
  {
    name: 'Maruti Suzuki Baleno',
    category: 'PREMIUM HATCHBACK',
    price: '₹5.99–9.10 lakh',
    minPrice: 5.99,
    maxPrice: 9.10,
    detail: '5 seats · Petrol',
    image:
      '/Carwise_Baleno_JPG/Baleno/01_baleno_rear_quarter.jpg',
    galleryImages: [
      '/Carwise_Baleno_JPG/Baleno/01_baleno_rear_quarter.jpg',
      '/Carwise_Baleno_JPG/Baleno/02_baleno_front_tracking.jpg',
      '/Carwise_Baleno_JPG/Baleno/03_baleno_interior.jpg',
      '/Carwise_Baleno_JPG/Baleno/04_baleno_front_three_quarter.jpg',
    ],
  },
  {
    name: 'Mahindra XUV 3XO',
    category: 'COMPACT SUV',
    price: '₹7.99–15.80 lakh',
    minPrice: 7.99,
    maxPrice: 15.80,
    detail: '5 seats · Petrol / Diesel',
    image:
      '/Carwise_Mahindra_XUV_3XO_JPG/01_xuv_3xo_rear_view.jpg',
    galleryImages: [
      '/Carwise_Mahindra_XUV_3XO_JPG/01_xuv_3xo_rear_view.jpg',
      '/Carwise_Mahindra_XUV_3XO_JPG/02_xuv_3xo_front_view.jpg',
      '/Carwise_Mahindra_XUV_3XO_JPG/03_xuv_3xo_roof_three_quarter_view.jpg',
      '/Carwise_Mahindra_XUV_3XO_JPG/04_xuv_3xo_front_detail.jpg',
    ],
  },
  {
    name: 'Kia Seltos',
    category: 'MID-SIZE SUV',
    price: '₹10.99–19.99 lakh',
    minPrice: 10.99,
    maxPrice: 19.99,
    detail: '5 seats · Petrol / Diesel',
    image:
      '/Carwise_Kia_Seltos_JPG/kia-seltos-front-three-quarter.jpg',
    galleryImages: [
      '/Carwise_Kia_Seltos_JPG/kia-seltos-front-three-quarter.jpg',
      '/Carwise_Kia_Seltos_JPG/kia-seltos-interior-dashboard.jpg',
      '/Carwise_Kia_Seltos_JPG/kia-seltos-rear-and-front.jpg',
      '/Carwise_Kia_Seltos_JPG/kia-seltos-top-view.jpg',
    ],
  },
  {
    name: 'Toyota Innova Hycross',
    category: 'MPV',
    price: '₹19.15–31.90 lakh',
    minPrice: 19.15,
    maxPrice: 31.90,
    detail: '7–8 seats · Petrol / Hybrid',
    image:
      '/Carwise_Toyota_Innova_Hycross_JPG/Carwise_Toyota_Innova_Hycross/01_innova_hycross_rear_detail.jpg',
    galleryImages: [
      '/Carwise_Toyota_Innova_Hycross_JPG/Carwise_Toyota_Innova_Hycross/01_innova_hycross_rear_detail.jpg',
      '/Carwise_Toyota_Innova_Hycross_JPG/Carwise_Toyota_Innova_Hycross/02_innova_hycross_wheel_detail.jpg',
      '/Carwise_Toyota_Innova_Hycross_JPG/Carwise_Toyota_Innova_Hycross/03_innova_hycross_front_detail.jpg',
      '/Carwise_Toyota_Innova_Hycross_JPG/Carwise_Toyota_Innova_Hycross/04_innova_hycross_front_view.jpg',
    ],
  },
  {
    name: 'Volkswagen Virtus',
    category: 'SEDAN',
    price: '₹10.50–19.00 lakh',
    minPrice: 10.50,
    maxPrice: 19.00,
    detail: '5 seats · Petrol',
    image:
      '/Carwise_Volkswagen_Virtus_JPG/Carwise_Volkswagen_Virtus/01_virtus_rear_three_quarter.jpg',
    galleryImages: [
      '/Carwise_Volkswagen_Virtus_JPG/Carwise_Volkswagen_Virtus/01_virtus_rear_three_quarter.jpg',
      '/Carwise_Volkswagen_Virtus_JPG/Carwise_Volkswagen_Virtus/02_virtus_side_profile.jpg',
      '/Carwise_Volkswagen_Virtus_JPG/Carwise_Volkswagen_Virtus/03_virtus_rear_seat_interior.jpg',
      '/Carwise_Volkswagen_Virtus_JPG/Carwise_Volkswagen_Virtus/04_virtus_rear_view.jpg',
    ],
  },
  {
    name: 'Tata Punch EV',
    category: 'ELECTRIC SUV',
    price: '₹9.99–14.44 lakh',
    minPrice: 9.99,
    maxPrice: 14.44,
    detail: '5 seats · Electric',
    image:
      '/Carwise_Tata_Punch_EV_JPG/Carwise_Tata_Punch_EV/01_tata_punch_ev_interior.jpg',
    galleryImages: [
      '/Carwise_Tata_Punch_EV_JPG/Carwise_Tata_Punch_EV/01_tata_punch_ev_interior.jpg',
      '/Carwise_Tata_Punch_EV_JPG/Carwise_Tata_Punch_EV/02_tata_punch_ev_rear_quarter.jpg',
      '/Carwise_Tata_Punch_EV_JPG/Carwise_Tata_Punch_EV/03_tata_punch_ev_side_profile.jpg',
      '/Carwise_Tata_Punch_EV_JPG/Carwise_Tata_Punch_EV/04_tata_punch_ev_front_view.jpg',
    ],
  },
  {
    name: 'MG Windsor EV',
    category: 'ELECTRIC CROSSOVER',
    price: '₹14.00–18.50 lakh',
    minPrice: 14.00,
    maxPrice: 18.50,
    detail: '5 seats · Electric',
    image:
      '/Carwise_MG_Windsor_EV_JPG/Carwise_MG_Windsor_EV/01_windsor_ev_front_detail.jpg',
    galleryImages: [
      '/Carwise_MG_Windsor_EV_JPG/Carwise_MG_Windsor_EV/01_windsor_ev_front_detail.jpg',
      '/Carwise_MG_Windsor_EV_JPG/Carwise_MG_Windsor_EV/02_windsor_ev_wheel_detail.jpg',
      '/Carwise_MG_Windsor_EV_JPG/Carwise_MG_Windsor_EV/03_windsor_ev_front_three_quarter.jpg',
      '/Carwise_MG_Windsor_EV_JPG/Carwise_MG_Windsor_EV/04_windsor_ev_two_car_view.jpg',
    ],
  },
  {
    name: 'Mahindra Thar Roxx',
    category: 'SUV',
    price: '₹12.25–22.06 lakh',
    minPrice: 12.25,
    maxPrice: 22.06,
    detail: '5 seats · Petrol / Diesel',
    image:
      '/Carwise_Mahindra_Thar_Roxx_JPG/Carwise_Mahindra_Thar_Roxx/01_thar_roxx_side_profile.jpg',
    galleryImages: [
      '/Carwise_Mahindra_Thar_Roxx_JPG/Carwise_Mahindra_Thar_Roxx/01_thar_roxx_side_profile.jpg',
      '/Carwise_Mahindra_Thar_Roxx_JPG/Carwise_Mahindra_Thar_Roxx/02_thar_roxx_front_view.jpg',
      '/Carwise_Mahindra_Thar_Roxx_JPG/Carwise_Mahindra_Thar_Roxx/03_thar_roxx_rear_three_quarter_view.jpg',
      '/Carwise_Mahindra_Thar_Roxx_JPG/Carwise_Mahindra_Thar_Roxx/04_thar_roxx_interior_dashboard.jpg',
    ],
  },
]

 const vehicleInsights = {
  pros: [
    'Cabin comfort and seating for your everyday journeys.',
    'Practicality, visibility and ease of use.',
    'Features and equipment available across variants.',
  ],
  cons: [
    'Real-world fuel efficiency and running costs.',
    'Service, maintenance and repair expenses.',
    'Price, space and performance trade-offs against alternatives.',
  ],
 }

 const reviewCategories = [
  'Comfort',
  'Performance',
  'Practicality',
  'Fuel efficiency',
  'Value for money',
 ]

const browseOptions = [
  { icon: '₹', title: 'By budget', subtitle: 'Find your price range' },
  { icon: '▱', title: 'By body type', subtitle: 'SUVs, sedans and more' },
  { icon: 'ϟ', title: 'By fuel', subtitle: 'Petrol, diesel or electric' },
]

const createCarId = (carName: string) => {
  return carName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const readStoredCarNames = (key: string): string[] => {
  try {
    const storedValue = localStorage.getItem(key)

    if (!storedValue) {
      return []
    }

    const parsedValue: unknown = JSON.parse(storedValue)

    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue.filter(
      (carName): carName is string => typeof carName === 'string'
    )
  } catch {
    return []
  }
}

const writeStoredCarNames = (key: string, carNames: string[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(carNames))
  } catch {
    // Keep the application usable if browser storage is unavailable.
  }
}

const getMatchingCars = (
  budgetPreference: string,
  bodyPreference: string,
  fuelPreference: string
) => {
  const budgetRanges: Record<string, [number, number]> = {
    'under-10': [0, 10],
    '10-15': [10, 15],
    '15-20': [15, 20],
    '20-25': [20, 25],
    'above-25': [25, Infinity],
  }

  const selectedBudget = budgetRanges[budgetPreference]

  const matchesFuel = (car: (typeof featuredCars)[number]) => {
    if (!fuelPreference || fuelPreference === 'No preference') {
      return true
    }

    const fuelDetails = car.detail
      .split(' · ')[1]
      .toLowerCase()

    if (fuelPreference === 'Electric') {
      return (
        fuelDetails.includes('electric') ||
        fuelDetails.includes('ev')
      )
    }

    return fuelDetails.includes(fuelPreference.toLowerCase())
  }

  const matchesBodyType = (car: (typeof featuredCars)[number]) => {
    if (!bodyPreference || bodyPreference === 'No preference') {
      return true
    }

    const category = car.category.toLowerCase()

    if (bodyPreference === 'SUV') {
      return category.includes('suv')
    }

    if (bodyPreference === 'Hatchback') {
      return category.includes('hatchback')
    }

    return category.includes(bodyPreference.toLowerCase())
  }

  return featuredCars
    .filter((car) => {
      const matchesBudget =
        !selectedBudget ||
        (
          car.maxPrice >= selectedBudget[0] &&
          car.minPrice <= selectedBudget[1]
        )

      return matchesBudget && matchesFuel(car)
    })
    .sort((carA, carB) => {
      const scoreA = matchesBodyType(carA) ? 1 : 0
      const scoreB = matchesBodyType(carB) ? 1 : 0

      return scoreB - scoreA
    })
}

function CarDetailPage() {
  const { carId } = useParams<{ carId: string }>()
  
  const [shortlistedCars, setShortlistedCars] = useState<string[]>(() =>
  readStoredCarNames('carwise-shortlist')
 )

  const [compareCars, setCompareCars] = useState<string[]>(() =>
  readStoredCarNames('carwise-comparison')
 )

useEffect(() => {
  writeStoredCarNames('carwise-shortlist', shortlistedCars)
}, [shortlistedCars])

useEffect(() => {
  writeStoredCarNames('carwise-comparison', compareCars)
}, [compareCars])

  const car = featuredCars.find(
    (item) => createCarId(item.name) === carId
  )
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const galleryExpandButtonRef = useRef<HTMLButtonElement>(null)
  const lightboxCloseButtonRef = useRef<HTMLButtonElement>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if (!isImageExpanded) {
    return
  }
  const galleryExpandButton = galleryExpandButtonRef.current

  lightboxCloseButtonRef.current?.focus()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsImageExpanded(false)
      return
    }

    if (event.key === 'Tab') {
      const focusableElements =
        lightboxRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )

      if (!focusableElements?.length) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }
  }

  document.addEventListener('keydown', handleKeyDown)

  return () => {
  document.removeEventListener('keydown', handleKeyDown)
  galleryExpandButton?.focus()
 }
 
 }, [isImageExpanded])
  if (!car) {
    return (
      <main className="app-shell">
        <section className="shortlist-section">
          <h2>Car not found</h2>
          <p>We couldn't find the car you're looking for.</p>
          <Link to="/" className="primary-button">
            Back to discovery
          </Link>
        </section>
      </main>
    )
  }
  
  const galleryImages = car.galleryImages
  const activeImage = galleryImages[activeImageIndex]

  const isShortlisted = shortlistedCars.includes(car.name)
  const isCompared = compareCars.includes(car.name)

  const toggleShortlist = () => {
  setShortlistedCars((previousCars) =>
    previousCars.includes(car.name)
      ? previousCars.filter((name) => name !== car.name)
      : [...previousCars, car.name]
  )
}

  const toggleComparison = () => {
  setCompareCars((previousCars) => {
    if (previousCars.includes(car.name)) {
      return previousCars.filter((name) => name !== car.name)
    }

    if (previousCars.length >= 3) {
      return previousCars
    }

    return [...previousCars, car.name]
  })
}

  const [seating, fuel] = car.detail.split(' · ')
  
 const specificationGroups = [
  {
    title: 'Vehicle overview',
    items: [
      { label: 'Vehicle name', value: car.name },
      { label: 'Body type', value: car.category },
    ],
  },
  {
    title: 'Pricing',
    items: [
      { label: 'Price range', value: car.price },
    ],
  },
  {
    title: 'Capacity & fuel',
    items: [
      { label: 'Seating capacity', value: seating },
      { label: 'Fuel type', value: fuel },
    ],
  },
]

  return (
   <main className="app-shell car-detail-page">
    <header className="navbar">
      <Link className="brand" to="/">
        <span className="brand-mark">c.</span>
        <span>carwise</span>
      </Link>

    <nav className="nav-links" aria-label="Main navigation">
     <Link to="/">Discover</Link>
     <Link to="/discover">Find your fit</Link>
     <a href="/#featured">Explore cars</a>
    </nav>

      <Link to="/#featured" className="nav-cta">
        Explore collection <span>↗</span>
      </Link>
    </header>

    <section className="vehicle-page-content">
      <Link to="/" className="back-link">
        ← Back to discovery
      </Link>

 <div className="vehicle-hero-layout">
  <div className="vehicle-heading">
    <span className="section-kicker">
      CARWISE / VEHICLE DETAILS
    </span>

    <span className="vehicle-category-label">
      {car.category}
    </span>

    <h1>{car.name}</h1>
    <p>{car.detail}</p>

    <div className="vehicle-price-block">
      <span>PRICE RANGE</span>
      <strong>{car.price}</strong>
      <small>Illustrative starting price</small>
    </div>

    <div className="vehicle-action-buttons">
      <button
        type="button"
        className={`vehicle-action-button ${isShortlisted ? 'active' : ''}`}
        onClick={toggleShortlist}
        aria-pressed={isShortlisted}
      >
        {isShortlisted ? '♥ Saved to shortlist' : '♡ Add to shortlist'}
      </button>

      <button
        type="button"
        className={`vehicle-action-button ${isCompared ? 'active' : ''}`}
        onClick={toggleComparison}
        aria-pressed={isCompared}
        disabled={!isCompared && compareCars.length >= 3}
      >
        {isCompared ? '✓ Added to comparison' : '+ Add to comparison'}
      </button>
    </div>

    {!isCompared && compareCars.length >= 3 && (
      <small className="comparison-limit-message">
        Remove a car from comparison before adding another.
      </small>
    )}
  </div>

  <div className="vehicle-hero-image">
    <img
      src={car.image}
      alt={`${car.name} - vehicle`}
      loading="eager"
    />
    <span className="vehicle-image-label">
      EXPLORE THE VEHICLE
    </span>
  </div>

  <section className="vehicle-overview">
    <div className="vehicle-overview-heading">
      <span className="section-kicker">GET TO KNOW YOUR CAR</span>
      <h2>Vehicle overview.</h2>
      <p>
        A quick look at what makes the {car.name} worth exploring.
      </p>
    </div>

    <div className="vehicle-overview-grid">
      <div className="overview-card">
        <span className="overview-label">BODY TYPE</span>
        <h3>{car.category}</h3>
        <p>Vehicle category</p>
      </div>

      <div className="overview-card">
        <span className="overview-label">PRICE RANGE</span>
        <h3>{car.price}</h3>
        <p>Displayed starting collection price</p>
      </div>

      <div className="overview-card overview-description">
        <span className="overview-label">ABOUT THIS VEHICLE</span>
        <h3>{car.name}</h3>
        <p>{car.detail}</p>
      </div>
    </div>
  </section>
 </div>

     <div className="vehicle-gallery">
       <button
         ref={galleryExpandButtonRef}
         type="button"
         className="vehicle-gallery-main"
         onClick={() => setIsImageExpanded(true)}
         aria-label={`Expand image of ${car.name}`}
       >
        <img
          src={activeImage}
          alt={car.name}
       />
    <span className="gallery-expand-label">
      Expand image ↗
    </span>
  </button>

  <div className="vehicle-image-caption">
    <span>
      {String(activeImageIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')} · {car.name.toUpperCase()}
    </span>
    <span>CARWISE COLLECTION</span>
  </div>

  <div className="vehicle-gallery-thumbnails">
    {galleryImages.map((image, index) => (
      <button
        type="button"
        key={image}
        className={`gallery-thumbnail ${index === activeImageIndex ? 'active' : ''}`}
        onClick={() => setActiveImageIndex(index)}
        aria-label={`View image ${index + 1} of ${car.name}`}
      >
        <img src={image} alt={`${car.name} view ${index + 1}`} />
      </button>
    ))}

    <span className="gallery-image-count">
      {galleryImages.length} {galleryImages.length === 1 ? 'image' : 'images'} available
    </span>
  </div>
</div>

{isImageExpanded && (
  <div
    ref={lightboxRef}
    className="vehicle-image-lightbox"
    role="dialog"
    aria-modal="true"
    aria-label={`${car.name} image viewer`}
    onClick={() => setIsImageExpanded(false)}
  >
    <button
      ref={lightboxCloseButtonRef}
      type="button"
      className="lightbox-close"
      onClick={() => setIsImageExpanded(false)}
      aria-label="Close image viewer"
    >
      ×
    </button>

    <img
      src={activeImage}
      alt={car.name}
      onClick={(event) => event.stopPropagation()}
    />

    <span className="lightbox-caption">
      {car.name} · Image {activeImageIndex + 1} of {galleryImages.length}
    </span>
  </div>
  )
 }

      <section className="vehicle-highlights">
        <div className="section-heading">
          <div>
            <span className="section-kicker">AT A GLANCE</span>
            <h2>Know the essentials.</h2>
          </div>
          <span className="demo-note">Vehicle overview</span>
        </div>

        <div className="vehicle-highlight-grid">
          <article className="vehicle-highlight-card">
            <span className="highlight-icon">₹</span>
            <span className="highlight-label">Price range</span>
            <strong>{car.price}</strong>
          </article>

          <article className="vehicle-highlight-card">
            <span className="highlight-icon">▱</span>
            <span className="highlight-label">Body type</span>
            <strong>{car.category}</strong>
          </article>

          <article className="vehicle-highlight-card">
            <span className="highlight-icon">♙</span>
            <span className="highlight-label">Seating capacity</span>
            <strong>{seating}</strong>
          </article>

          <article className="vehicle-highlight-card">
            <span className="highlight-icon">ϟ</span>
            <span className="highlight-label">Fuel type</span>
            <strong>{fuel}</strong>
          </article>
        </div>
      </section>

      <section className="vehicle-specifications">
        <div className="section-heading">
          <div>
            <span className="section-kicker">THE DETAILS</span>
            <h2>Vehicle specifications.</h2>
          </div>
          <span className="demo-note">Available information</span>
        </div>

        
 <div className="specification-table">
  {specificationGroups.map((group) => (
    <div className="specification-group" key={group.title}>
      <h3 className="specification-group-title">
        {group.title}
      </h3>

      {group.items.map((item) => (
        <div className="specification-row" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value || 'Not available'}</strong>
        </div>
      ))}
    </div>
  ))}
 </div>

        <p className="data-disclaimer">
          Concept prototype: vehicle information and prices are
          illustrative placeholders. Verify current specifications
          and prices before making a purchase decision.
        </p>
      </section>

      <section className="vehicle-insights">
   <div className="section-heading">
    <div>
      <span className="section-kicker">BEYOND THE SPECIFICATIONS</span>
      <h2>What to evaluate.</h2>
    </div>
      <span className="demo-note">Research pending</span>
    </div>

  <div className="pros-cons-grid">
    <article className="insight-card pros-card">
      <div className="insight-card-heading">
        <span className="insight-symbol">＋</span>
        <h3>Areas to evaluate</h3>
      </div>

      <ul>
        {vehicleInsights.pros.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>

    <article className="insight-card cons-card">
      <div className="insight-card-heading">
        <span className="insight-symbol">−</span>
        <h3>Trade-offs to check</h3>
      </div>

      <ul>
        {vehicleInsights.cons.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  </div>

    <section className="vehicle-reviews">
  <div className="section-heading">
    <div>
      <span className="section-kicker">REAL-WORLD PERSPECTIVE</span>
      <h2>Owner reviews.</h2>
    </div>
    <span className="demo-note">Coming soon</span>
  </div>

  <div className="review-overview">
    <div className="review-intro">
      <span className="review-icon">✳</span>
      <h3>More than specifications.</h3>
      <p>
        Understand how a vehicle performs in everyday ownership
        through structured feedback from verified owners.
      </p>
    </div>

    <div className="review-categories">
      <h3>What reviews will cover</h3>

      {reviewCategories.map((category) => (
        <div className="review-category-row" key={category}>
          <span>{category}</span>
          <span className="review-pending">Not rated yet</span>
        </div>
      ))}
    </div>
  </div>

  <div className="review-empty-state">
    <span className="review-empty-icon">✎</span>
    <h3>No verified reviews yet.</h3>
    <p>
      Owner feedback for this vehicle will appear here once
      verified review data is available.
    </p>
  </div>

  <p className="data-disclaimer">
    Carwise does not currently collect or verify owner reviews.
    Ratings and testimonials will only be displayed when supported
    by genuine review sources.
  </p>
 </section>

  <p className="data-disclaimer">
    These are research prompts, not confirmed advantages or
    disadvantages of this vehicle. Vehicle-specific insights
    will be added after research and verification.
  </p>
   </section>
  </section>

    <footer className="footer">
      <Link className="brand" to="/">
        <span className="brand-mark">c.</span>
        <span>carwise</span>
      </Link>
      <p>A little more clarity for your next big drive.</p>
      <span className="footer-caption">
        DESIGNED FOR BETTER DECISIONS.
      </span>
    </footer>
  </main>
)
}

 function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  
  const [shortlistedCars, setShortlistedCars] = useState<string[]>(() =>
  readStoredCarNames('carwise-shortlist')
 )
  
 const [compareCars, setCompareCars] = useState<string[]>(() =>
  readStoredCarNames('carwise-comparison')
 )
  
  const [comparisonLimitReached, setComparisonLimitReached] = useState(false)
  
  const toggleCompareCar = (carName: string) => {
  if (compareCars.includes(carName)) {
    setCompareCars((previousCars) =>
      previousCars.filter((name) => name !== carName)
    )
    setComparisonLimitReached(false)
    return
  }

  if (compareCars.length >= 3) {
    setComparisonLimitReached(true)
    return
  }

  setCompareCars((previousCars) => [...previousCars, carName])
  setComparisonLimitReached(false)
}

useEffect(() => {
  writeStoredCarNames('carwise-shortlist', shortlistedCars)
}, [shortlistedCars])

useEffect(() => {
  writeStoredCarNames('carwise-comparison', compareCars)
}, [compareCars])

  const budgetRanges: Record<string, [number, number]> = {
   'Under ₹5 lakh': [0, 5],
   '₹5–10 lakh': [5, 10],
   '₹10–15 lakh': [10, 15],
   '₹15–25 lakh': [15, 25],
   'Above ₹25 lakh': [25, Infinity],
}

const filteredCars = featuredCars.filter((car) => {
  const query = searchQuery.trim().toLowerCase()

  const matchesSearch =
    car.name.toLowerCase().includes(query) ||
    car.category.toLowerCase().includes(query) ||
    car.detail.toLowerCase().includes(query)

  const budget = budgetRanges[selectedBudget]

  const matchesBudget =
    !budget ||
    (car.maxPrice >= budget[0] && car.minPrice <= budget[1])

  return matchesSearch && matchesBudget
})

  return (
    <main className="app-shell">
      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-mark">c.</span>
          <span>carwise</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a className="nav-active" href="#discover">Discover</a>
          <a href="#featured">Explore cars</a>
          <a href="#about">About</a>
        </nav>
    
        <div className="nav-actions">
          <a className="nav-cta" href="#shortlist">
            Shortlist ({shortlistedCars.length}) <span>♡</span>
          </a>
          <a className="nav-cta" href="#comparison">
            Compare ({compareCars.length}) <span>⇄</span>
          </a>
        </div>
      </header>

      <section className="hero" id="discover">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            A smarter way to choose your next car
          </div>

          <h1>
            The right car
            <br />
            changes <span>everything.</span>
          </h1>

          <p className="hero-description">
            Less scrolling. Fewer doubts. Find a car that fits your
            budget, your everyday life, and the way you want to drive.
          </p>

          <a className="primary-button" href="#featured">
            Explore cars <span>↗</span>
          </a>

          <div className="hero-note">
            <span className="note-line" />
            Made for the way India drives.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-label">
            <span>01 / YOUR NEXT CHAPTER</span>
            <span>DISCOVER</span>
          </div>

          <img
            className="hero-car"
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90"
            alt="Car on the road"
          />

          <Link to="/discover" className="floating-card">
            <span className="floating-icon">✳</span>
            <div>
             <strong>Find your fit</strong>
             <p>Not just another car list.</p>
            </div>
            <span className="floating-arrow">↗</span>
          </Link>
          </div>
        </section>

      <section className="search-section" aria-label="Find a car">
        <div className="search-heading">
          <span className="section-kicker">START YOUR SEARCH</span>
          <span className="search-hint">A few details make all the difference.</span>
        </div>

        <form
          className="search-bar"
          onSubmit={(event) => {
            event.preventDefault()
            document.getElementById('featured')?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          <label className="search-field">
            <span className="field-icon">⌕</span>
            <span className="field-content">
              <span className="field-label">What are you looking for?</span>
              <input 
                aria-label="Search cars"
                placeholder="Try SUV, sedan, Tata..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </span>
          </label>

          <label className="search-field select-field">
            <span className="field-icon">₹</span>
            <span className="field-content">
              <span className="field-label">Your budget</span>
              <select 
                aria-label="Choose your budget"
                value={selectedBudget}
                onChange={(event) => setSelectedBudget(event.target.value)}
              >
                <option value="" disabled>Select budget</option>
                <option>Under ₹5 lakh</option>
                <option>₹5–10 lakh</option>
                <option>₹10–15 lakh</option>
                <option>₹15–25 lakh</option>
                <option>Above ₹25 lakh</option>
              </select>
            </span>
          </label>

          <button className="search-button" type="submit">
            Find cars <span>↗</span>
          </button>
        </form>
      </section>

      <section className="browse-section" id="about">
        <div className="section-heading">
          <div>
            <span className="section-kicker">A GOOD PLACE TO START</span>
            <h2>Explore your way.</h2>
          </div>
          <p>Big decisions get easier when you break them down.</p>
        </div>

        <div className="browse-grid">
          {browseOptions.map((option, index) => (
            <a
              className="browse-card"
              href="#featured"
              key={option.title}
            >
              <span className="browse-number">0{index + 1}</span>
              <span className="browse-icon">{option.icon}</span>
              <span className="browse-title">{option.title}</span>
              <span className="browse-subtitle">{option.subtitle}</span>
              <span className="browse-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="featured-section" id="featured">
        <div className="section-heading">
          <div>
            <span className="section-kicker">A FEW GOOD PLACES TO BEGIN</span>
            <h2>Cars worth knowing.</h2>
          </div>
          <span className="demo-note">Illustrative starting collection</span>
        </div>

        <div className="car-grid">
          {filteredCars.map((car) => (
            <article className="car-card" key={car.name}>
              <div className="car-image-wrap">
                <img src={car.image} alt={car.name} loading="lazy" />
                <span className="car-category">{car.category}</span>
                
         <button
          className="save-button"
          type="button"
          aria-label={`Save ${car.name}`}
          aria-pressed={shortlistedCars.includes(car.name)}
          onClick={() => {
          setShortlistedCars((previousCars) =>
          previousCars.includes(car.name)
          ? previousCars.filter((name) => name !== car.name)
          : [...previousCars, car.name]
          )
         }}
         >
          {shortlistedCars.includes(car.name) ? '♥' : '♡'}
         </button>
        </div>

         <button
           className="compare-button"
            type="button"
            onClick={() => toggleCompareCar(car.name)}
            aria-label={
            compareCars.includes(car.name)
              ? `Remove ${car.name} from comparison`
              : `Add ${car.name} to comparison`
          }
            aria-pressed={compareCars.includes(car.name)}
          >
            {compareCars.includes(car.name) ? 'Added ✓' : '+ Compare'}
          </button>

              <Link
                to={`/cars/${createCarId(car.name)}`}
                className="car-info car-detail-link"
              >
                <h3>{car.name}</h3>
                <p className="car-detail">{car.detail}</p>
                <div className="car-bottom">
                  <span className="car-price">{car.price}</span>
                  <span className="car-arrow">↗</span>
                </div>
              </Link>
            </article>
          ))}
          
          {filteredCars.length === 0 && (
            <p className="data-disclaimer">
            No cars match your search. Try another car name or budget.
            </p>
         )}

        </div>

        <p className="data-disclaimer">
          Concept prototype: prices and vehicle details are placeholders
          for design exploration. Verify current specifications and prices
          before making a purchase decision.
        </p>
      </section>

      <section className="shortlist-section" id="shortlist">
       <div className="section-heading">
         <div>
           <span className="section-kicker">YOUR PERSONAL COLLECTION</span>
           <h2>Your shortlist.</h2>
         </div>
         <span className="demo-note">
           {shortlistedCars.length} saved
         </span>
       </div>

  {shortlistedCars.length === 0 ? (
    <div className="shortlist-empty">
      <span className="empty-heart">♡</span>
      <h3>No cars saved just yet.</h3>
      <p>
        When a car catches your eye, tap its heart to keep it here.
      </p>
      <a className="primary-button" href="#featured">
        Explore cars <span>↗</span>
      </a>
    </div>
  ) : (
    <div className="car-grid">
      {featuredCars
        .filter((car) => shortlistedCars.includes(car.name))
        .map((car) => (
          <article className="car-card" key={car.name}>
            <div className="car-image-wrap">
              <img src={car.image} alt={car.name} loading="lazy" />
              <span className="car-category">{car.category}</span>
              <button
                className="save-button"
                type="button"
                aria-label={`Remove ${car.name} from shortlist`}
                aria-pressed="true"
                onClick={() =>
                  setShortlistedCars((previousCars) =>
                    previousCars.filter((name) => name !== car.name)
                  )
                }
              >
                ♥
              </button>
            </div>

            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="car-detail">{car.detail}</p>
              <div className="car-bottom">
                <span className="car-price">{car.price}</span>
                <span className="car-arrow">↗</span>
              </div>
            </div>
          </article>
        ))}
    </div>
  )}
</section>

 <section className="comparison-section" id="comparison">
  <div className="section-heading">
    <div>
      <span className="section-kicker">MAKE THE RIGHT CHOICE</span>
      <h2>Compare your cars.</h2>
    </div>
    <span className="demo-note">
      {compareCars.length} of 3 selected
    </span>
  </div>

  {compareCars.length === 0 ? (
    <div className="comparison-empty">
      <span className="empty-heart">⇄</span>
      <h3>No cars selected for comparison.</h3>
      <p>
        Explore the collection and select up to three cars
        to compare their details side by side.
      </p>
      <a className="primary-button" href="#featured">
        Explore cars <span>↗</span>
      </a>
    </div>
  ) : (
    <div className="comparison-grid">
      {featuredCars
        .filter((car) => compareCars.includes(car.name))
        .map((car) => (
          <article className="comparison-card" key={car.name}>
            <img src={car.image} alt={car.name} />

            <div className="comparison-card-content">
              <h3>{car.name}</h3>

              <div className="comparison-detail">
                <span>Body type</span>
                <strong>{car.category}</strong>
              </div>

              <div className="comparison-detail">
                <span>Price range</span>
                <strong>{car.price}</strong>
              </div>

              <div className="comparison-detail">
                <span>Seating & fuel</span>
                <strong>{car.detail}</strong>
              </div>

              <button
                className="comparison-remove"
                type="button"
                onClick={() => toggleCompareCar(car.name)}
              >
                Remove from comparison ×
              </button>
            </div>
          </article>
        ))}
    </div>
  )}

  {(compareCars.length === 3 || comparisonLimitReached) && (
  <p className="comparison-limit" role="status">
    You've selected the maximum of three cars.
    Remove a car to compare another one.
  </p>
 )}
 </section>

      <footer className="footer">
        <a className="brand" href="#">
          <span className="brand-mark">c.</span>
          <span>carwise</span>
        </a>
        <p>A little more clarity for your next big drive.</p>
        <span className="footer-caption">DESIGNED FOR BETTER DECISIONS.</span>
      </footer>
    </main>
  )
}
 
function DiscoverPage() {
  const [budget, setBudget] = useState('')
  const [usage, setUsage] = useState('')
  const [bodyType, setBodyType] = useState('')
  const [fuelType, setFuelType] = useState('')
  const [priorities, setPriorities] = useState<string[]>([])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showPreferenceError, setShowPreferenceError] = useState(false)

  const budgetOptions = [
    { label: 'Under ₹10 lakh', value: 'under-10' },
    { label: '₹10–15 lakh', value: '10-15' },
    { label: '₹15–20 lakh', value: '15-20' },
    { label: '₹20–25 lakh', value: '20-25' },
    { label: 'Above ₹25 lakh', value: 'above-25' },
  ]

  const usageOptions = [
    'Daily city commute',
    'Family use',
    'Long-distance travel',
    'A mix of everything',
  ]

  const bodyTypeOptions = [
    'SUV',
    'Sedan',
    'Hatchback',
    'MPV',
    'No preference',
  ]

  const fuelOptions = [
    'Petrol',
    'Diesel',
    'Electric',
    'Hybrid',
    'No preference',
  ]

  const priorityOptions = [
    'Fuel efficiency',
    'Comfort',
    'Space & practicality',
    'Performance',
    'Safety',
    'Technology & features',
  ]

  const togglePriority = (priority: string) => {
    setPriorities((previous) =>
      previous.includes(priority)
        ? previous.filter((item) => item !== priority)
        : [...previous, priority]
    )
  }

   const matchingCars = getMatchingCars(
    budget,
    bodyType,
    fuelType
   )
   
   const selectedBudgetLabel =
  budgetOptions.find((option) => option.value === budget)?.label

 const selectedPreferences = [
  { label: 'Budget', value: selectedBudgetLabel },
  { label: 'Usage', value: usage },
  { label: 'Body type', value: bodyType },
  { label: 'Fuel type', value: fuelType },
 ].filter((preference) => preference.value)

  return (
    <main className="app-shell">
      <header className="navbar">
        <Link className="brand" to="/">
          <span className="brand-mark">c.</span>
          <span>carwise</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/">Discover</Link>
          <Link to="/discover" className="nav-active">
            Find your fit
          </Link>
          <Link to="/#featured">Explore cars</Link>
        </nav>
      </header>

      <section className="discover-page-content">
        <Link to="/" className="back-link">
          ← Back to discovery
        </Link>

        <div className="discover-intro">
          <span className="section-kicker">
            CARWISE / GUIDED DISCOVERY
          </span>

          <h1>Find the car that fits your life.</h1>

          <p>
            Every driver is different. Tell us what matters to you,
            and let's narrow down your options.
          </p>

          <div className="discover-progress">
            <span>YOUR CAR, YOUR WAY</span>
            <span>01 / 05 PREFERENCES</span>
          </div>
        </div>

        <div className="discover-form">

          <section className="discover-question">
            <div className="discover-question-heading">
              <span className="question-number">01</span>
              <div>
                <h2>What's your budget?</h2>
                <p>Choose a comfortable price range for your next car.</p>
              </div>
            </div>

            <div className="discover-options">
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`discover-option ${
                    budget === option.value ? 'selected' : ''
                  }`}
                  onClick={() => setBudget(option.value)}
                  aria-pressed={budget === option.value}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          <section className="discover-question">
            <div className="discover-question-heading">
              <span className="question-number">02</span>
              <div>
                <h2>How will you use your car?</h2>
                <p>Think about where most of your driving happens.</p>
              </div>
            </div>

            <div className="discover-options">
              {usageOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`discover-option ${
                    usage === option ? 'selected' : ''
                  }`}
                  onClick={() => setUsage(option)}
                  aria-pressed={usage === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>

          <section className="discover-question">
            <div className="discover-question-heading">
              <span className="question-number">03</span>
              <div>
                <h2>What body type do you prefer?</h2>
                <p>Choose the kind of vehicle you see yourself driving.</p>
              </div>
            </div>

            <div className="discover-options">
              {bodyTypeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`discover-option ${
                    bodyType === option ? 'selected' : ''
                  }`}
                  onClick={() => setBodyType(option)}
                  aria-pressed={bodyType === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>

          <section className="discover-question">
            <div className="discover-question-heading">
              <span className="question-number">04</span>
              <div>
                <h2>Which fuel type works for you?</h2>
                <p>Select your preference, or keep your options open.</p>
              </div>
            </div>

            <div className="discover-options">
              {fuelOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`discover-option ${
                    fuelType === option ? 'selected' : ''
                  }`}
                  onClick={() => setFuelType(option)}
                  aria-pressed={fuelType === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>

          <section className="discover-question">
            <div className="discover-question-heading">
              <span className="question-number">05</span>
              <div>
                <h2>What matters most to you?</h2>
                <p>Select all the priorities that matter when choosing a car.</p>
              </div>
            </div>

            <div className="discover-options">
              {priorityOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`discover-option ${
                    priorities.includes(option) ? 'selected' : ''
                  }`}
                  onClick={() => togglePriority(option)}
                  aria-pressed={priorities.includes(option)}
                >
                  {priorities.includes(option) ? '✓ ' : '+ '}
                  {option}
                </button>
              ))}
            </div>
          </section>

 <div className="discover-selection-summary">
  <span>YOUR PREFERENCES</span>

  <div className="discover-summary-content">
    <p className="discover-completion-count">
      {[budget, usage, bodyType, fuelType].filter(Boolean).length +
        (priorities.length > 0 ? 1 : 0)} of 5 sections completed
    </p>

    <div className="discover-summary-list">
      {selectedPreferences.map((preference) => (
        <div className="discover-summary-item" key={preference.label}>
          <span>{preference.label}</span>
          <strong>{preference.value}</strong>
        </div>
      ))}

      {priorities.length > 0 && (
        <div className="discover-summary-item">
          <span>Priorities</span>
          <strong>{priorities.join(', ')}</strong>
        </div>
      )}
    </div>

    <p className="discover-match-count">
      {matchingCars.length} cars currently match your budget
      and fuel preference.
    </p>
  </div>
 </div>

  <div className="discover-submit">
  <button
    type="button"
    className="discover-submit-button"
    onClick={() => {
    if (
     !budget &&
     (!bodyType || bodyType === 'No preference') &&
     (!fuelType || fuelType === 'No preference')
    ) {
    setHasSubmitted(false)
    setShowPreferenceError(true)
    return
   }
  setShowPreferenceError(false)
  setHasSubmitted(true)
 }}
  >
    Find my cars
    <span>→</span>
  </button>

  <p>
    We'll use your budget and fuel preference to narrow down
    the available cars.
  </p>
 </div>

 {showPreferenceError && (
  <div className="discover-validation-message">
    <strong>Let's narrow things down first.</strong>
    <p>
      Please select at least one budget, body type or fuel
      preference before finding your cars.
    </p>
  </div>
 )}
 
 {hasSubmitted && (
  <section className="discover-results">
    <div className="discover-results-heading">
      <span className="section-kicker">
        CARWISE / YOUR MATCHES
      </span>

      <h2>Cars worth exploring.</h2>

      <p>
        Based on your budget and fuel preference,
        here are the cars you can consider.
      </p>
    </div>

    {matchingCars.length > 0 ? (
      <div className="discover-results-grid">
        {matchingCars.map((car) => {
          const isPreferredBodyType =
            !bodyType ||
            bodyType === 'No preference' ||
            (
              bodyType === 'SUV'
                ? car.category.toLowerCase().includes('suv')
                : bodyType === 'Hatchback'
                  ? car.category.toLowerCase().includes('hatchback')
                  : car.category.toLowerCase().includes(
                      bodyType.toLowerCase()
                    )
            )

          return (
            <article
              className="discover-car-card"
              key={car.name}
            >
              <Link
                to={`/cars/${createCarId(car.name)}`}
                className="discover-car-image-link"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="discover-car-image"
                />
              </Link>

              <div className="discover-car-info">
                <span className="discover-car-category">
                  {car.category}
                </span>

                <h3>{car.name}</h3>

                <p className="discover-car-detail">
                  {car.detail}
                </p>

                <strong className="discover-car-price">
                  {car.price}
                </strong>

                <span className="discover-match-label">
                  {isPreferredBodyType
                    ? 'Matches your body type preference'
                    : 'Alternative worth considering'}
                </span>

                <Link
                  to={`/cars/${createCarId(car.name)}`}
                  className="discover-view-car"
                >
                  Explore car <span>→</span>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    ) : (
      <div className="discover-no-results">
        <h3>No cars match these preferences yet.</h3>
        <p>
          Try changing your budget or fuel preference
          to explore more options.
        </p>
      </div>
    )}
  </section>
)}
        </div>
      </section>
    </main>
  )
 }

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/cars/:carId" element={<CarDetailPage />} />
    </Routes>
  )
}

export default App
