import { CarProps } from '@/types';

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '49b4a9f2damsh9815156852b6e76p1ae597jsn1649abeba4ac',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3',
    { headers }
  );
  const result = await response.json();
  return result;
}

export const generateCarImage = (car: CarProps) => {};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
