package org.proway.student.country_spaback.domain.dto;

import org.proway.student.country_spaback.domain.TouristAttractions;

import java.util.List;

public record CityDto (String name, String imgUrl, List<TouristAttractions> touristAttractions) { }
