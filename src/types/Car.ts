export type ImagesCarType = {
  id: string
  image_name: string
  image_url: string
}
type SpecificationsCarType = {
  id: string
  name: string
  description: string
  iconName: string
}

export interface CarsType {
  id?: string | number
  available?: boolean
  description: string
  name: string
  fuel_type: 'gasoline' | 'hybrid' | 'energy'
  transmission: 'automatic' | 'manual'
  daily_rate: string
  brand: string
  images: ImagesCarType[]
  specifications: SpecificationsCarType[]
}
