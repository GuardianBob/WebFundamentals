-- Select all countries that speak Slovene
SELECT Name, Language, Percentage
FROM country
JOIN countrylanguage
ON country.Code = countrylanguage.CountryCode
WHERE countrylanguage.Language = "Slovene"
ORDER BY countrylanguage.Percentage DESC;

-- Display the total number of cities for each country
SELECT country.Name, COUNT(cities.country_code) AS sum_Cities
FROM country
JOIN cities
ON country.Code = cities.country_code
GROUP BY country.Name 
ORDER BY COUNT(cities.country_code) DESC;

-- get all the cities in Mexico with a population of greater than 500,000
SELECT cities.name, cities.population
FROM cities
JOIN country
ON country.Code = cities.country_code
WHERE country.Name = 'Mexico' AND cities.population > 500000
ORDER BY cities.population DESC;

-- Get all languages in each country with a percentage greater than 89%
SELECT Name, Language, Percentage
FROM country
JOIN countrylanguage
ON country.Code = countrylanguage.CountryCode
WHERE countrylanguage.Percentage > 89
ORDER BY countrylanguage.Percentage DESC;

-- get all the countries with Surface Area below 501 and Population greater than 100,000
SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 AND population > 100000
ORDER BY name ASC;

-- get countries with only Constitutional Monarchy with a capital greater than 200 and a life expectancy greater than 75 years
SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = "Constitutional Monarchy" AND capital > 200 AND life_expectancy > 75;

-- get all the cities of Argentina inside the Buenos Aires district and have the population greater than 500, 000
SELECT countries.name AS country, cities.name, cities.district, cities.population
FROM cities
LEFT JOIN countries ON cities.country_id = countries.id
WHERE cities.district = "Buenos Aires" AND cities.population > 500000
ORDER BY cities.population DESC;

-- summarize the number of countries in each region
SELECT region, COUNT(code) AS countries
FROM countries
GROUP BY region
ORDER BY countries DESC;
