/**
 * Perfect Planet — personal aerial photography & video project.
 * `photos` are Paulo's own aerial stills; each destination comes from how he labelled the source files.
 * `hero` and each `preview` are illustrative presentation art for the /projects overview only — not documentary photos.
 * Add new places/films here — the pages render from this data.
 */

/** `place`: a landmark already named in the photo's alt text — shown as the viewer caption. */
export type Photo = { src: string; alt: string; width: number; height: number; place?: string }

export type Destination = {
  id: string
  name: string
  region: 'Washington' | 'Oregon' | 'Florida'
  descriptor: string
  /** Presentation image for the /projects destination card. */
  preview: { src: string; alt: string }
  /** Paulo's own stills, shown on the Perfect Planet page. */
  photos: Photo[]
}

export type Film = { title: string; youtubeUrl: string; destination?: string }

const dir = '/projects/perfect-planet'

export const perfectPlanet = {
  name: 'Perfect Planet',
  subtitle: 'Aerial Photography & Visual Exploration',
  description:
    'A personal drone photography and video project exploring landscapes, cities and places across the United States. Through aerial perspectives, I capture natural environments, urban skylines and the unique character of each destination.',
  tags: ['Photography', 'Cinematic Videos', 'Travel', 'USA'],
  /** Set once the channel link should be published on the portfolio. */
  youtubeUrl: undefined as string | undefined,
  hero: {
    src: `${dir}/perfect-planet-hero.png`,
    alt: 'Illustrative sunset panorama of the Seattle skyline and waterfront, with Mount Rainier on the horizon',
  },
  films: [] as Film[],
  destinations: [
    {
      id: 'seattle',
      name: 'Seattle, WA',
      region: 'Washington',
      descriptor: 'City · Waterfront · Mountains',
      preview: { src: `${dir}/seattle.png`, alt: 'Illustrative view of the Seattle skyline and waterfront at dusk' },
      photos: [
        { src: `${dir}/seattle-space-needle-elliott-bay.png`, alt: 'The Space Needle seen from above, with Seattle neighborhoods and Elliott Bay behind it', width: 1880, height: 1045, place: 'Space Needle · Elliott Bay' },
        { src: `${dir}/seattle-downtown-waterfront.png`, alt: 'Downtown Seattle towers rising above the waterfront piers and the Great Wheel', width: 1880, height: 1045 },
        { src: `${dir}/seattle-waterfront-skyline.png`, alt: 'Seattle waterfront along Elliott Bay, with the Great Wheel, piers and downtown skyline', width: 1880, height: 1045, place: 'Elliott Bay Waterfront' },
      ],
    },
    {
      id: 'oregon',
      name: 'Oregon',
      region: 'Oregon',
      descriptor: 'Landscapes · Waterfalls · Rivers',
      preview: { src: `${dir}/oregon.png`, alt: 'Illustrative view of a waterfall in a green Pacific Northwest forest' },
      photos: [
        { src: `${dir}/oregon-waterfall.png`, alt: 'A waterfall dropping through a narrow, moss-covered basalt canyon in green forest', width: 1932, height: 1076 },
        { src: `${dir}/oregon-vista-house-gorge.png`, alt: 'Vista House on its cliff-top viewpoint above the Columbia River Gorge, surrounded by forest', width: 1880, height: 1045, place: 'Vista House · Columbia River Gorge' },
        { src: `${dir}/oregon-columbia-river-highway.png`, alt: 'A highway running between a lake and the Columbia River, with forested hills on both sides', width: 1880, height: 1045, place: 'Columbia River' },
      ],
    },
    {
      id: 'siesta-key',
      name: 'Siesta Key, FL',
      region: 'Florida',
      descriptor: 'Coastline · Gulf · Beaches',
      preview: { src: `${dir}/siesta-key.png`, alt: 'Illustrative view of a white-sand beach along turquoise Gulf water' },
      photos: [
        { src: `${dir}/siesta-key-beach.png`, alt: 'A busy white-sand beach curving beside shallow turquoise Gulf water', width: 1880, height: 1045 },
        { src: `${dir}/siesta-key-shoreline.png`, alt: 'Long white shoreline and calm turquoise water along the barrier island', width: 1880, height: 1045 },
        { src: `${dir}/siesta-key-coast.png`, alt: 'Turquoise Gulf water with a boat wake beside a long, crowded beach', width: 1880, height: 1045 },
      ],
    },
    {
      id: 'key-biscayne',
      name: 'Key Biscayne, FL',
      region: 'Florida',
      descriptor: 'Coastline · Lighthouse · Nature',
      preview: { src: `${dir}/key-biscayne.png`, alt: 'Illustrative view of a white lighthouse above tropical forest and the sea' },
      photos: [
        { src: `${dir}/key-biscayne-cape-florida-lighthouse.png`, alt: 'Cape Florida Lighthouse above tropical forest, with clear water and clouds over the horizon', width: 1880, height: 1045, place: 'Cape Florida Lighthouse' },
        { src: `${dir}/key-biscayne-lighthouse-from-water.png`, alt: 'Cape Florida Lighthouse on the tip of Key Biscayne, seen from the water, with the Miami skyline in the distance', width: 1880, height: 1045, place: 'Cape Florida Lighthouse' },
        { src: `${dir}/key-biscayne-bay.png`, alt: 'Calm bay water along the forested Key Biscayne shoreline, with the Miami skyline on the horizon', width: 1880, height: 1045 },
      ],
    },
    {
      id: 'caladesi-island',
      name: 'Caladesi Island, FL',
      region: 'Florida',
      descriptor: 'Barrier Island · Gulf Coast',
      preview: { src: `${dir}/caladesi-island.png`, alt: 'Illustrative view of a Gulf coast beach at sunset' },
      photos: [
        { src: `${dir}/caladesi-island-sandbars.jpg`, alt: 'Curving white sandbars and turquoise channels around the tip of a barrier island', width: 1880, height: 1045 },
        { src: `${dir}/caladesi-island-gulf-beach.jpg`, alt: 'White beach with blue umbrellas and palms, facing the open Gulf', width: 1880, height: 1045 },
        { src: `${dir}/caladesi-island-shoreline.jpg`, alt: 'Clear green water in front of a long beach lined with umbrellas and a boardwalk', width: 1880, height: 1045 },
      ],
    },
  ] satisfies Destination[],
}
