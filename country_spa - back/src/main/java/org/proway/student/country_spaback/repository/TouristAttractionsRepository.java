package org.proway.student.country_spaback.repository;

import org.proway.student.country_spaback.domain.TouristAttractions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TouristAttractionsRepository extends JpaRepository<TouristAttractions, UUID> {
}
