# UFO Sightings webpage built with JavaScript

## Overview
This webpage includes information on UFOs and a dynamic table that allows users to filter UFO sightings on multiple criteria (date, city, state, country, and shape). The site was built with JavaScript, HTML, and CSS.

## Data Source
data.js

## Results
When users go to the webpage, they see the article "UFO Sightings: Fact or Fancy? Ufologists Weigh In" and a table with UFO sightings (see below). 

<img width="1200" alt="Screen Shot 2022-08-18 at 9 25 22 PM" src="https://user-images.githubusercontent.com/106405775/185529607-099f784b-9e8b-4981-9cbb-aaae64030c2b.png">

The "Filter Search" section is below the article on the left.

<img width="287" alt="Screen Shot 2022-08-18 at 9 29 42 PM" src="https://user-images.githubusercontent.com/106405775/185529826-20dfd227-322f-49b2-8b61-21e87ab376e2.png">

Users can filter by one of all of the search criteria shown. To search, a user would type in a criteria and press enter. The results would then display in the table. For example, there is one result for UFO sightings in **New Mexico** that were in the shape of a **light**. 

<img width="1181" alt="Screen Shot 2022-08-18 at 9 34 45 PM" src="https://user-images.githubusercontent.com/106405775/185530644-bbae7a71-4397-4465-b82f-4779de39b32c.png">

To clear the search criteria, users need to delete their input, and the table would display the full sightings results. 

## Summary
Currently, users need to know the exact information that they would like to search in order to use the UFO sightings filter, which is not ideal since the users are not the dataset. The filter is case sensitive and will only return results with the correct whitespace (i.e. no results will return if there is a space at the end of the word).

Below are a two recommendations make the table more user friendly.

#### `.toLowerCase()`
Data in the city, state, country, and shapes columns are all in lowercase. If a user were to search for "Benton" instead of "benton" no results would show (see below). Many people will automatically capitalize the first letter in city names and both letters in the state and country codes. I would recommend adding the `.toLowerCase()` function to the filter, so that the information pulls correctly.

<img width="1177" alt="Screen Shot 2022-08-18 at 6 31 04 PM" src="https://user-images.githubusercontent.com/106405775/185513018-081a045c-5591-40ad-94ca-ae423056adc4.png">

#### `.trim()`
Additionally, the filter will only pull UFO sighting results if the whitespace is in the right spot. For example, if a user typed in "elcajon" or "el cajon ", the table would not show any results (see below). Users may unintenstionally add a space after a word and not realize the input error. Thus, I would recommend adding the `.trim()` funciton to the filter as well.

**No space**
<img width="1180" alt="Screen Shot 2022-08-18 at 6 55 12 PM" src="https://user-images.githubusercontent.com/106405775/185514571-dd8eefb2-aa95-4767-aa14-7b9655741098.png">

**Extra space at the end**
<img width="1186" alt="Screen Shot 2022-08-18 at 6 55 54 PM" src="https://user-images.githubusercontent.com/106405775/185514621-95fd02c8-1210-4a62-bb5e-ce959c4b9b13.png">
