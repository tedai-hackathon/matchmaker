/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductProcurement = /* GraphQL */ `
  subscription OnCreateProductProcurement(
    $filter: ModelSubscriptionProductProcurementFilterInput
  ) {
    onCreateProductProcurement(filter: $filter) {
      id
      supplierproductID
      Price
      Currency
      OrderDate
      DeliveryDa
      PaymentDate
      Amount
      Unit
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateProductProcurement = /* GraphQL */ `
  subscription OnUpdateProductProcurement(
    $filter: ModelSubscriptionProductProcurementFilterInput
  ) {
    onUpdateProductProcurement(filter: $filter) {
      id
      supplierproductID
      Price
      Currency
      OrderDate
      DeliveryDa
      PaymentDate
      Amount
      Unit
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteProductProcurement = /* GraphQL */ `
  subscription OnDeleteProductProcurement(
    $filter: ModelSubscriptionProductProcurementFilterInput
  ) {
    onDeleteProductProcurement(filter: $filter) {
      id
      supplierproductID
      Price
      Currency
      OrderDate
      DeliveryDa
      PaymentDate
      Amount
      Unit
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateSupplierProduct = /* GraphQL */ `
  subscription OnCreateSupplierProduct(
    $filter: ModelSubscriptionSupplierProductFilterInput
  ) {
    onCreateSupplierProduct(filter: $filter) {
      id
      ProductProcurements {
        items {
          id
          supplierproductID
          Price
          Currency
          OrderDate
          DeliveryDa
          PaymentDate
          Amount
          Unit
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierProductVetProductId
      __typename
    }
  }
`;
export const onUpdateSupplierProduct = /* GraphQL */ `
  subscription OnUpdateSupplierProduct(
    $filter: ModelSubscriptionSupplierProductFilterInput
  ) {
    onUpdateSupplierProduct(filter: $filter) {
      id
      ProductProcurements {
        items {
          id
          supplierproductID
          Price
          Currency
          OrderDate
          DeliveryDa
          PaymentDate
          Amount
          Unit
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierProductVetProductId
      __typename
    }
  }
`;
export const onDeleteSupplierProduct = /* GraphQL */ `
  subscription OnDeleteSupplierProduct(
    $filter: ModelSubscriptionSupplierProductFilterInput
  ) {
    onDeleteSupplierProduct(filter: $filter) {
      id
      ProductProcurements {
        items {
          id
          supplierproductID
          Price
          Currency
          OrderDate
          DeliveryDa
          PaymentDate
          Amount
          Unit
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierProductVetProductId
      __typename
    }
  }
`;
export const onCreateProductPrice = /* GraphQL */ `
  subscription OnCreateProductPrice(
    $filter: ModelSubscriptionProductPriceFilterInput
  ) {
    onCreateProductPrice(filter: $filter) {
      id
      CreatedAt
      ValidFrom
      ValidTo
      Price
      Currency
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetProductProductPricesId
      __typename
    }
  }
`;
export const onUpdateProductPrice = /* GraphQL */ `
  subscription OnUpdateProductPrice(
    $filter: ModelSubscriptionProductPriceFilterInput
  ) {
    onUpdateProductPrice(filter: $filter) {
      id
      CreatedAt
      ValidFrom
      ValidTo
      Price
      Currency
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetProductProductPricesId
      __typename
    }
  }
`;
export const onDeleteProductPrice = /* GraphQL */ `
  subscription OnDeleteProductPrice(
    $filter: ModelSubscriptionProductPriceFilterInput
  ) {
    onDeleteProductPrice(filter: $filter) {
      id
      CreatedAt
      ValidFrom
      ValidTo
      Price
      Currency
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetProductProductPricesId
      __typename
    }
  }
`;
export const onCreateVetServiceType = /* GraphQL */ `
  subscription OnCreateVetServiceType(
    $filter: ModelSubscriptionVetServiceTypeFilterInput
  ) {
    onCreateVetServiceType(filter: $filter) {
      id
      TypeName
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateVetServiceType = /* GraphQL */ `
  subscription OnUpdateVetServiceType(
    $filter: ModelSubscriptionVetServiceTypeFilterInput
  ) {
    onUpdateVetServiceType(filter: $filter) {
      id
      TypeName
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteVetServiceType = /* GraphQL */ `
  subscription OnDeleteVetServiceType(
    $filter: ModelSubscriptionVetServiceTypeFilterInput
  ) {
    onDeleteVetServiceType(filter: $filter) {
      id
      TypeName
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateVetService = /* GraphQL */ `
  subscription OnCreateVetService(
    $filter: ModelSubscriptionVetServiceFilterInput
  ) {
    onCreateVetService(filter: $filter) {
      id
      VetServiceType {
        id
        TypeName
        Description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetServiceVetServiceTypeId
      __typename
    }
  }
`;
export const onUpdateVetService = /* GraphQL */ `
  subscription OnUpdateVetService(
    $filter: ModelSubscriptionVetServiceFilterInput
  ) {
    onUpdateVetService(filter: $filter) {
      id
      VetServiceType {
        id
        TypeName
        Description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetServiceVetServiceTypeId
      __typename
    }
  }
`;
export const onDeleteVetService = /* GraphQL */ `
  subscription OnDeleteVetService(
    $filter: ModelSubscriptionVetServiceFilterInput
  ) {
    onDeleteVetService(filter: $filter) {
      id
      VetServiceType {
        id
        TypeName
        Description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetServiceVetServiceTypeId
      __typename
    }
  }
`;
export const onCreateVetMedicalProduct = /* GraphQL */ `
  subscription OnCreateVetMedicalProduct(
    $filter: ModelSubscriptionVetMedicalProductFilterInput
  ) {
    onCreateVetMedicalProduct(filter: $filter) {
      id
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Name
      NameAbbreviation
      InternalID
      SinglePortionMeasurementUnit
      SinglePortionAmount
      PackageMeasurementUnit
      PortionsPerPackage
      WholeSalePacklageUnit
      PackagesPerWholeSalePackage
      Type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetMedicalProductVetProductId
      __typename
    }
  }
`;
export const onUpdateVetMedicalProduct = /* GraphQL */ `
  subscription OnUpdateVetMedicalProduct(
    $filter: ModelSubscriptionVetMedicalProductFilterInput
  ) {
    onUpdateVetMedicalProduct(filter: $filter) {
      id
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Name
      NameAbbreviation
      InternalID
      SinglePortionMeasurementUnit
      SinglePortionAmount
      PackageMeasurementUnit
      PortionsPerPackage
      WholeSalePacklageUnit
      PackagesPerWholeSalePackage
      Type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetMedicalProductVetProductId
      __typename
    }
  }
`;
export const onDeleteVetMedicalProduct = /* GraphQL */ `
  subscription OnDeleteVetMedicalProduct(
    $filter: ModelSubscriptionVetMedicalProductFilterInput
  ) {
    onDeleteVetMedicalProduct(filter: $filter) {
      id
      VetProduct {
        id
        ProductPrices {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Name
      NameAbbreviation
      InternalID
      SinglePortionMeasurementUnit
      SinglePortionAmount
      PackageMeasurementUnit
      PortionsPerPackage
      WholeSalePacklageUnit
      PackagesPerWholeSalePackage
      Type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vetMedicalProductVetProductId
      __typename
    }
  }
`;
export const onCreateVetProduct = /* GraphQL */ `
  subscription OnCreateVetProduct(
    $filter: ModelSubscriptionVetProductFilterInput
  ) {
    onCreateVetProduct(filter: $filter) {
      id
      ProductPrices {
        items {
          id
          CreatedAt
          ValidFrom
          ValidTo
          Price
          Currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vetProductProductPricesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateVetProduct = /* GraphQL */ `
  subscription OnUpdateVetProduct(
    $filter: ModelSubscriptionVetProductFilterInput
  ) {
    onUpdateVetProduct(filter: $filter) {
      id
      ProductPrices {
        items {
          id
          CreatedAt
          ValidFrom
          ValidTo
          Price
          Currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vetProductProductPricesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteVetProduct = /* GraphQL */ `
  subscription OnDeleteVetProduct(
    $filter: ModelSubscriptionVetProductFilterInput
  ) {
    onDeleteVetProduct(filter: $filter) {
      id
      ProductPrices {
        items {
          id
          CreatedAt
          ValidFrom
          ValidTo
          Price
          Currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vetProductProductPricesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onCreateSupplier(filter: $filter) {
      id
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      InternalSuplierID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierCompanyId
      __typename
    }
  }
`;
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onUpdateSupplier(filter: $filter) {
      id
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      InternalSuplierID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierCompanyId
      __typename
    }
  }
`;
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onDeleteSupplier(filter: $filter) {
      id
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      InternalSuplierID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supplierCompanyId
      __typename
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
      id
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Animals {
        items {
          id
          Name
          Color
          ProductID
          NameAbbreviation
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerAnimalsId
          animalRaceAnimalsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      InternalCustomerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerCompanyId
      __typename
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
      id
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Animals {
        items {
          id
          Name
          Color
          ProductID
          NameAbbreviation
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerAnimalsId
          animalRaceAnimalsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      InternalCustomerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerCompanyId
      __typename
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
      id
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Animals {
        items {
          id
          Name
          Color
          ProductID
          NameAbbreviation
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerAnimalsId
          animalRaceAnimalsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      InternalCustomerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerCompanyId
      __typename
    }
  }
`;
export const onCreateCompanyLocation = /* GraphQL */ `
  subscription OnCreateCompanyLocation(
    $filter: ModelSubscriptionCompanyLocationFilterInput
  ) {
    onCreateCompanyLocation(filter: $filter) {
      id
      Location {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyLocationsId
      companyLocationLocationId
      __typename
    }
  }
`;
export const onUpdateCompanyLocation = /* GraphQL */ `
  subscription OnUpdateCompanyLocation(
    $filter: ModelSubscriptionCompanyLocationFilterInput
  ) {
    onUpdateCompanyLocation(filter: $filter) {
      id
      Location {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyLocationsId
      companyLocationLocationId
      __typename
    }
  }
`;
export const onDeleteCompanyLocation = /* GraphQL */ `
  subscription OnDeleteCompanyLocation(
    $filter: ModelSubscriptionCompanyLocationFilterInput
  ) {
    onDeleteCompanyLocation(filter: $filter) {
      id
      Location {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyCompanyLocationsId
      companyLocationLocationId
      __typename
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
      id
      Street
      Nr
      PLZ
      CityName
      Type
      GEO_LAT
      GEO_LON
      Country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
      id
      Street
      Nr
      PLZ
      CityName
      Type
      GEO_LAT
      GEO_LON
      Country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
      id
      Street
      Nr
      PLZ
      CityName
      Type
      GEO_LAT
      GEO_LON
      Country
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateAnimalType = /* GraphQL */ `
  subscription OnCreateAnimalType(
    $filter: ModelSubscriptionAnimalTypeFilterInput
  ) {
    onCreateAnimalType(filter: $filter) {
      id
      TypeName
      AnimalRaces {
        items {
          id
          RaceName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          animalTypeAnimalRacesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAnimalType = /* GraphQL */ `
  subscription OnUpdateAnimalType(
    $filter: ModelSubscriptionAnimalTypeFilterInput
  ) {
    onUpdateAnimalType(filter: $filter) {
      id
      TypeName
      AnimalRaces {
        items {
          id
          RaceName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          animalTypeAnimalRacesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAnimalType = /* GraphQL */ `
  subscription OnDeleteAnimalType(
    $filter: ModelSubscriptionAnimalTypeFilterInput
  ) {
    onDeleteAnimalType(filter: $filter) {
      id
      TypeName
      AnimalRaces {
        items {
          id
          RaceName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          animalTypeAnimalRacesId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateAnimalRace = /* GraphQL */ `
  subscription OnCreateAnimalRace(
    $filter: ModelSubscriptionAnimalRaceFilterInput
  ) {
    onCreateAnimalRace(filter: $filter) {
      id
      RaceName
      Animals {
        items {
          id
          Name
          Color
          ProductID
          NameAbbreviation
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerAnimalsId
          animalRaceAnimalsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      AnimalType {
        id
        TypeName
        AnimalRaces {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      animalTypeAnimalRacesId
      __typename
    }
  }
`;
export const onUpdateAnimalRace = /* GraphQL */ `
  subscription OnUpdateAnimalRace(
    $filter: ModelSubscriptionAnimalRaceFilterInput
  ) {
    onUpdateAnimalRace(filter: $filter) {
      id
      RaceName
      Animals {
        items {
          id
          Name
          Color
          ProductID
          NameAbbreviation
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerAnimalsId
          animalRaceAnimalsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      AnimalType {
        id
        TypeName
        AnimalRaces {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      animalTypeAnimalRacesId
      __typename
    }
  }
`;
export const onDeleteAnimalRace = /* GraphQL */ `
  subscription OnDeleteAnimalRace(
    $filter: ModelSubscriptionAnimalRaceFilterInput
  ) {
    onDeleteAnimalRace(filter: $filter) {
      id
      RaceName
      Animals {
        items {
          id
          Name
          Color
          ProductID
          NameAbbreviation
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerAnimalsId
          animalRaceAnimalsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      AnimalType {
        id
        TypeName
        AnimalRaces {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      animalTypeAnimalRacesId
      __typename
    }
  }
`;
export const onCreateAnimal = /* GraphQL */ `
  subscription OnCreateAnimal($filter: ModelSubscriptionAnimalFilterInput) {
    onCreateAnimal(filter: $filter) {
      id
      AnimalRace {
        id
        RaceName
        Animals {
          nextToken
          startedAt
          __typename
        }
        AnimalType {
          id
          TypeName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        animalTypeAnimalRacesId
        __typename
      }
      Name
      Color
      ProductID
      NameAbbreviation
      Customer {
        id
        Company {
          id
          Name
          NameAbbreviation
          TaxID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Animals {
          nextToken
          startedAt
          __typename
        }
        InternalCustomerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCompanyId
        __typename
      }
      Gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerAnimalsId
      animalRaceAnimalsId
      __typename
    }
  }
`;
export const onUpdateAnimal = /* GraphQL */ `
  subscription OnUpdateAnimal($filter: ModelSubscriptionAnimalFilterInput) {
    onUpdateAnimal(filter: $filter) {
      id
      AnimalRace {
        id
        RaceName
        Animals {
          nextToken
          startedAt
          __typename
        }
        AnimalType {
          id
          TypeName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        animalTypeAnimalRacesId
        __typename
      }
      Name
      Color
      ProductID
      NameAbbreviation
      Customer {
        id
        Company {
          id
          Name
          NameAbbreviation
          TaxID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Animals {
          nextToken
          startedAt
          __typename
        }
        InternalCustomerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCompanyId
        __typename
      }
      Gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerAnimalsId
      animalRaceAnimalsId
      __typename
    }
  }
`;
export const onDeleteAnimal = /* GraphQL */ `
  subscription OnDeleteAnimal($filter: ModelSubscriptionAnimalFilterInput) {
    onDeleteAnimal(filter: $filter) {
      id
      AnimalRace {
        id
        RaceName
        Animals {
          nextToken
          startedAt
          __typename
        }
        AnimalType {
          id
          TypeName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        animalTypeAnimalRacesId
        __typename
      }
      Name
      Color
      ProductID
      NameAbbreviation
      Customer {
        id
        Company {
          id
          Name
          NameAbbreviation
          TaxID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Animals {
          nextToken
          startedAt
          __typename
        }
        InternalCustomerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCompanyId
        __typename
      }
      Gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerAnimalsId
      animalRaceAnimalsId
      __typename
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
      id
      Position
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      MainLocation {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PositionTitle
      Person {
        id
        N
        FamilyName
        Gender
        Title {
          id
          Language
          Title
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Home {
          id
          Street
          Nr
          PLZ
          CityName
          Type
          GEO_LAT
          GEO_LON
          Country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        isEmployee {
          id
          Position
          PositionTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyEmployeesId
          employeeMainLocationId
          employeePersonId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        personTitleId
        personHomeId
        personIsEmployeeId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyEmployeesId
      employeeMainLocationId
      employeePersonId
      __typename
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
      id
      Position
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      MainLocation {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PositionTitle
      Person {
        id
        N
        FamilyName
        Gender
        Title {
          id
          Language
          Title
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Home {
          id
          Street
          Nr
          PLZ
          CityName
          Type
          GEO_LAT
          GEO_LON
          Country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        isEmployee {
          id
          Position
          PositionTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyEmployeesId
          employeeMainLocationId
          employeePersonId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        personTitleId
        personHomeId
        personIsEmployeeId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyEmployeesId
      employeeMainLocationId
      employeePersonId
      __typename
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
      id
      Position
      Company {
        id
        Name
        Employees {
          nextToken
          startedAt
          __typename
        }
        NameAbbreviation
        TaxID
        CompanyLocations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      MainLocation {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PositionTitle
      Person {
        id
        N
        FamilyName
        Gender
        Title {
          id
          Language
          Title
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Home {
          id
          Street
          Nr
          PLZ
          CityName
          Type
          GEO_LAT
          GEO_LON
          Country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        isEmployee {
          id
          Position
          PositionTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyEmployeesId
          employeeMainLocationId
          employeePersonId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        personTitleId
        personHomeId
        personIsEmployeeId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companyEmployeesId
      employeeMainLocationId
      employeePersonId
      __typename
    }
  }
`;
export const onCreatePersonTitle = /* GraphQL */ `
  subscription OnCreatePersonTitle(
    $filter: ModelSubscriptionPersonTitleFilterInput
  ) {
    onCreatePersonTitle(filter: $filter) {
      id
      Language
      Title
      Gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePersonTitle = /* GraphQL */ `
  subscription OnUpdatePersonTitle(
    $filter: ModelSubscriptionPersonTitleFilterInput
  ) {
    onUpdatePersonTitle(filter: $filter) {
      id
      Language
      Title
      Gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePersonTitle = /* GraphQL */ `
  subscription OnDeletePersonTitle(
    $filter: ModelSubscriptionPersonTitleFilterInput
  ) {
    onDeletePersonTitle(filter: $filter) {
      id
      Language
      Title
      Gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onCreatePerson(filter: $filter) {
      id
      N
      FamilyName
      Gender
      Title {
        id
        Language
        Title
        Gender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Home {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      isEmployee {
        id
        Position
        Company {
          id
          Name
          NameAbbreviation
          TaxID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        MainLocation {
          id
          Street
          Nr
          PLZ
          CityName
          Type
          GEO_LAT
          GEO_LON
          Country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PositionTitle
        Person {
          id
          N
          FamilyName
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          personTitleId
          personHomeId
          personIsEmployeeId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyEmployeesId
        employeeMainLocationId
        employeePersonId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      personTitleId
      personHomeId
      personIsEmployeeId
      __typename
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onUpdatePerson(filter: $filter) {
      id
      N
      FamilyName
      Gender
      Title {
        id
        Language
        Title
        Gender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Home {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      isEmployee {
        id
        Position
        Company {
          id
          Name
          NameAbbreviation
          TaxID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        MainLocation {
          id
          Street
          Nr
          PLZ
          CityName
          Type
          GEO_LAT
          GEO_LON
          Country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PositionTitle
        Person {
          id
          N
          FamilyName
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          personTitleId
          personHomeId
          personIsEmployeeId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyEmployeesId
        employeeMainLocationId
        employeePersonId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      personTitleId
      personHomeId
      personIsEmployeeId
      __typename
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
    onDeletePerson(filter: $filter) {
      id
      N
      FamilyName
      Gender
      Title {
        id
        Language
        Title
        Gender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Home {
        id
        Street
        Nr
        PLZ
        CityName
        Type
        GEO_LAT
        GEO_LON
        Country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      isEmployee {
        id
        Position
        Company {
          id
          Name
          NameAbbreviation
          TaxID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        MainLocation {
          id
          Street
          Nr
          PLZ
          CityName
          Type
          GEO_LAT
          GEO_LON
          Country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PositionTitle
        Person {
          id
          N
          FamilyName
          Gender
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          personTitleId
          personHomeId
          personIsEmployeeId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companyEmployeesId
        employeeMainLocationId
        employeePersonId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      personTitleId
      personHomeId
      personIsEmployeeId
      __typename
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
      id
      Name
      Employees {
        items {
          id
          Position
          PositionTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyEmployeesId
          employeeMainLocationId
          employeePersonId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      NameAbbreviation
      TaxID
      CompanyLocations {
        items {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyLocationsId
          companyLocationLocationId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
      id
      Name
      Employees {
        items {
          id
          Position
          PositionTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyEmployeesId
          employeeMainLocationId
          employeePersonId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      NameAbbreviation
      TaxID
      CompanyLocations {
        items {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyLocationsId
          companyLocationLocationId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
      id
      Name
      Employees {
        items {
          id
          Position
          PositionTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyEmployeesId
          employeeMainLocationId
          employeePersonId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      NameAbbreviation
      TaxID
      CompanyLocations {
        items {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companyCompanyLocationsId
          companyLocationLocationId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateConversationStatement = /* GraphQL */ `
  subscription OnCreateConversationStatement(
    $filter: ModelSubscriptionConversationStatementFilterInput
    $owner: String
  ) {
    onCreateConversationStatement(filter: $filter, owner: $owner) {
      id
      StatementText
      Participant {
        id
        Name
        CognitoID
        Type
        ConversationStatements {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      DateTime
      ReplyToStatementId
      FollowUpToStatementId
      AudioSpeechRecording {
        id
        DateTime
        Filename
        ConversationStatement {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        audioSpeechRecordingConversationStatementId
        owner
        __typename
      }
      Done
      IdentifiedType
      IdentifiedTypeClass
      IdentifiedIntent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conversationParticipantConversationStatementsId
      conversationStatementAudioSpeechRecordingId
      owner
      __typename
    }
  }
`;
export const onUpdateConversationStatement = /* GraphQL */ `
  subscription OnUpdateConversationStatement(
    $filter: ModelSubscriptionConversationStatementFilterInput
    $owner: String
  ) {
    onUpdateConversationStatement(filter: $filter, owner: $owner) {
      id
      StatementText
      Participant {
        id
        Name
        CognitoID
        Type
        ConversationStatements {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      DateTime
      ReplyToStatementId
      FollowUpToStatementId
      AudioSpeechRecording {
        id
        DateTime
        Filename
        ConversationStatement {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        audioSpeechRecordingConversationStatementId
        owner
        __typename
      }
      Done
      IdentifiedType
      IdentifiedTypeClass
      IdentifiedIntent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conversationParticipantConversationStatementsId
      conversationStatementAudioSpeechRecordingId
      owner
      __typename
    }
  }
`;
export const onDeleteConversationStatement = /* GraphQL */ `
  subscription OnDeleteConversationStatement(
    $filter: ModelSubscriptionConversationStatementFilterInput
    $owner: String
  ) {
    onDeleteConversationStatement(filter: $filter, owner: $owner) {
      id
      StatementText
      Participant {
        id
        Name
        CognitoID
        Type
        ConversationStatements {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      DateTime
      ReplyToStatementId
      FollowUpToStatementId
      AudioSpeechRecording {
        id
        DateTime
        Filename
        ConversationStatement {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        audioSpeechRecordingConversationStatementId
        owner
        __typename
      }
      Done
      IdentifiedType
      IdentifiedTypeClass
      IdentifiedIntent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      conversationParticipantConversationStatementsId
      conversationStatementAudioSpeechRecordingId
      owner
      __typename
    }
  }
`;
export const onCreateConversationParticipant = /* GraphQL */ `
  subscription OnCreateConversationParticipant(
    $filter: ModelSubscriptionConversationParticipantFilterInput
    $owner: String
  ) {
    onCreateConversationParticipant(filter: $filter, owner: $owner) {
      id
      Name
      CognitoID
      Type
      ConversationStatements {
        items {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateConversationParticipant = /* GraphQL */ `
  subscription OnUpdateConversationParticipant(
    $filter: ModelSubscriptionConversationParticipantFilterInput
    $owner: String
  ) {
    onUpdateConversationParticipant(filter: $filter, owner: $owner) {
      id
      Name
      CognitoID
      Type
      ConversationStatements {
        items {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteConversationParticipant = /* GraphQL */ `
  subscription OnDeleteConversationParticipant(
    $filter: ModelSubscriptionConversationParticipantFilterInput
    $owner: String
  ) {
    onDeleteConversationParticipant(filter: $filter, owner: $owner) {
      id
      Name
      CognitoID
      Type
      ConversationStatements {
        items {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateAudioSpeechRecording = /* GraphQL */ `
  subscription OnCreateAudioSpeechRecording(
    $filter: ModelSubscriptionAudioSpeechRecordingFilterInput
    $owner: String
  ) {
    onCreateAudioSpeechRecording(filter: $filter, owner: $owner) {
      id
      DateTime
      Filename
      ConversationStatement {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      audioSpeechRecordingConversationStatementId
      owner
      __typename
    }
  }
`;
export const onUpdateAudioSpeechRecording = /* GraphQL */ `
  subscription OnUpdateAudioSpeechRecording(
    $filter: ModelSubscriptionAudioSpeechRecordingFilterInput
    $owner: String
  ) {
    onUpdateAudioSpeechRecording(filter: $filter, owner: $owner) {
      id
      DateTime
      Filename
      ConversationStatement {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      audioSpeechRecordingConversationStatementId
      owner
      __typename
    }
  }
`;
export const onDeleteAudioSpeechRecording = /* GraphQL */ `
  subscription OnDeleteAudioSpeechRecording(
    $filter: ModelSubscriptionAudioSpeechRecordingFilterInput
    $owner: String
  ) {
    onDeleteAudioSpeechRecording(filter: $filter, owner: $owner) {
      id
      DateTime
      Filename
      ConversationStatement {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      audioSpeechRecordingConversationStatementId
      owner
      __typename
    }
  }
`;
export const onCreateAITransaction = /* GraphQL */ `
  subscription OnCreateAITransaction(
    $filter: ModelSubscriptionAITransactionFilterInput
    $owner: String
  ) {
    onCreateAITransaction(filter: $filter, owner: $owner) {
      id
      AIServiceID
      AIModelID
      RequestJSON
      RequestDateTime
      ResponseJSON
      ResponseDateTime
      ConversationStatement {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aITransactionConversationStatementId
      owner
      __typename
    }
  }
`;
export const onUpdateAITransaction = /* GraphQL */ `
  subscription OnUpdateAITransaction(
    $filter: ModelSubscriptionAITransactionFilterInput
    $owner: String
  ) {
    onUpdateAITransaction(filter: $filter, owner: $owner) {
      id
      AIServiceID
      AIModelID
      RequestJSON
      RequestDateTime
      ResponseJSON
      ResponseDateTime
      ConversationStatement {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aITransactionConversationStatementId
      owner
      __typename
    }
  }
`;
export const onDeleteAITransaction = /* GraphQL */ `
  subscription OnDeleteAITransaction(
    $filter: ModelSubscriptionAITransactionFilterInput
    $owner: String
  ) {
    onDeleteAITransaction(filter: $filter, owner: $owner) {
      id
      AIServiceID
      AIModelID
      RequestJSON
      RequestDateTime
      ResponseJSON
      ResponseDateTime
      ConversationStatement {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aITransactionConversationStatementId
      owner
      __typename
    }
  }
`;
export const onCreateReminder = /* GraphQL */ `
  subscription OnCreateReminder(
    $filter: ModelSubscriptionReminderFilterInput
    $owner: String
  ) {
    onCreateReminder(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Thema
      Termin
      Details
      Done
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reminderHumanRequestId
      reminderAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onUpdateReminder = /* GraphQL */ `
  subscription OnUpdateReminder(
    $filter: ModelSubscriptionReminderFilterInput
    $owner: String
  ) {
    onUpdateReminder(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Thema
      Termin
      Details
      Done
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reminderHumanRequestId
      reminderAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onDeleteReminder = /* GraphQL */ `
  subscription OnDeleteReminder(
    $filter: ModelSubscriptionReminderFilterInput
    $owner: String
  ) {
    onDeleteReminder(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Thema
      Termin
      Details
      Done
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reminderHumanRequestId
      reminderAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onCreateKundenTermin = /* GraphQL */ `
  subscription OnCreateKundenTermin(
    $filter: ModelSubscriptionKundenTerminFilterInput
    $owner: String
  ) {
    onCreateKundenTermin(filter: $filter, owner: $owner) {
      id
      KundenName
      KundenAnfrage
      TerminVreinbarung
      OrtsVereinbarung
      AertztlicherVorbericht
      NotwendigeVorbereitungenIds
      Behandlung {
        id
        ErfassungsZeitpunkt
        Vorbericht {
          id
          KundenName
          KundenAnfrage
          TerminVreinbarung
          OrtsVereinbarung
          AertztlicherVorbericht
          NotwendigeVorbereitungenIds
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          kundenTerminBehandlungId
          owner
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        InPegassusErfasst
        HumanRequest {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        AIExecutionResponse {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        behandlungVorberichtId
        behandlungTherapieId
        behandlungHumanRequestId
        behandlungAIExecutionResponseId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      kundenTerminBehandlungId
      owner
      __typename
    }
  }
`;
export const onUpdateKundenTermin = /* GraphQL */ `
  subscription OnUpdateKundenTermin(
    $filter: ModelSubscriptionKundenTerminFilterInput
    $owner: String
  ) {
    onUpdateKundenTermin(filter: $filter, owner: $owner) {
      id
      KundenName
      KundenAnfrage
      TerminVreinbarung
      OrtsVereinbarung
      AertztlicherVorbericht
      NotwendigeVorbereitungenIds
      Behandlung {
        id
        ErfassungsZeitpunkt
        Vorbericht {
          id
          KundenName
          KundenAnfrage
          TerminVreinbarung
          OrtsVereinbarung
          AertztlicherVorbericht
          NotwendigeVorbereitungenIds
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          kundenTerminBehandlungId
          owner
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        InPegassusErfasst
        HumanRequest {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        AIExecutionResponse {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        behandlungVorberichtId
        behandlungTherapieId
        behandlungHumanRequestId
        behandlungAIExecutionResponseId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      kundenTerminBehandlungId
      owner
      __typename
    }
  }
`;
export const onDeleteKundenTermin = /* GraphQL */ `
  subscription OnDeleteKundenTermin(
    $filter: ModelSubscriptionKundenTerminFilterInput
    $owner: String
  ) {
    onDeleteKundenTermin(filter: $filter, owner: $owner) {
      id
      KundenName
      KundenAnfrage
      TerminVreinbarung
      OrtsVereinbarung
      AertztlicherVorbericht
      NotwendigeVorbereitungenIds
      Behandlung {
        id
        ErfassungsZeitpunkt
        Vorbericht {
          id
          KundenName
          KundenAnfrage
          TerminVreinbarung
          OrtsVereinbarung
          AertztlicherVorbericht
          NotwendigeVorbereitungenIds
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          kundenTerminBehandlungId
          owner
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        InPegassusErfasst
        HumanRequest {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        AIExecutionResponse {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        behandlungVorberichtId
        behandlungTherapieId
        behandlungHumanRequestId
        behandlungAIExecutionResponseId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      kundenTerminBehandlungId
      owner
      __typename
    }
  }
`;
export const onCreateUntersuchungsBefund = /* GraphQL */ `
  subscription OnCreateUntersuchungsBefund(
    $filter: ModelSubscriptionUntersuchungsBefundFilterInput
    $owner: String
  ) {
    onCreateUntersuchungsBefund(filter: $filter, owner: $owner) {
      id
      TierArt
      TierNameOderKennung
      Befund
      Diagnose {
        id
        Diagnose
        Befunde {
          nextToken
          startedAt
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        diagnoseTherapieId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      diagnoseBefundeId
      owner
      __typename
    }
  }
`;
export const onUpdateUntersuchungsBefund = /* GraphQL */ `
  subscription OnUpdateUntersuchungsBefund(
    $filter: ModelSubscriptionUntersuchungsBefundFilterInput
    $owner: String
  ) {
    onUpdateUntersuchungsBefund(filter: $filter, owner: $owner) {
      id
      TierArt
      TierNameOderKennung
      Befund
      Diagnose {
        id
        Diagnose
        Befunde {
          nextToken
          startedAt
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        diagnoseTherapieId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      diagnoseBefundeId
      owner
      __typename
    }
  }
`;
export const onDeleteUntersuchungsBefund = /* GraphQL */ `
  subscription OnDeleteUntersuchungsBefund(
    $filter: ModelSubscriptionUntersuchungsBefundFilterInput
    $owner: String
  ) {
    onDeleteUntersuchungsBefund(filter: $filter, owner: $owner) {
      id
      TierArt
      TierNameOderKennung
      Befund
      Diagnose {
        id
        Diagnose
        Befunde {
          nextToken
          startedAt
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        diagnoseTherapieId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      diagnoseBefundeId
      owner
      __typename
    }
  }
`;
export const onCreateDiagnose = /* GraphQL */ `
  subscription OnCreateDiagnose(
    $filter: ModelSubscriptionDiagnoseFilterInput
    $owner: String
  ) {
    onCreateDiagnose(filter: $filter, owner: $owner) {
      id
      Diagnose
      Befunde {
        items {
          id
          TierArt
          TierNameOderKennung
          Befund
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseBefundeId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      diagnoseTherapieId
      owner
      __typename
    }
  }
`;
export const onUpdateDiagnose = /* GraphQL */ `
  subscription OnUpdateDiagnose(
    $filter: ModelSubscriptionDiagnoseFilterInput
    $owner: String
  ) {
    onUpdateDiagnose(filter: $filter, owner: $owner) {
      id
      Diagnose
      Befunde {
        items {
          id
          TierArt
          TierNameOderKennung
          Befund
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseBefundeId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      diagnoseTherapieId
      owner
      __typename
    }
  }
`;
export const onDeleteDiagnose = /* GraphQL */ `
  subscription OnDeleteDiagnose(
    $filter: ModelSubscriptionDiagnoseFilterInput
    $owner: String
  ) {
    onDeleteDiagnose(filter: $filter, owner: $owner) {
      id
      Diagnose
      Befunde {
        items {
          id
          TierArt
          TierNameOderKennung
          Befund
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseBefundeId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      diagnoseTherapieId
      owner
      __typename
    }
  }
`;
export const onCreateTherapie = /* GraphQL */ `
  subscription OnCreateTherapie(
    $filter: ModelSubscriptionTherapieFilterInput
    $owner: String
  ) {
    onCreateTherapie(filter: $filter, owner: $owner) {
      id
      Services {
        items {
          id
          Service
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieServicesId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Diagnose {
        id
        Diagnose
        Befunde {
          nextToken
          startedAt
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        diagnoseTherapieId
        owner
        __typename
      }
      Behandlung {
        id
        ErfassungsZeitpunkt
        Vorbericht {
          id
          KundenName
          KundenAnfrage
          TerminVreinbarung
          OrtsVereinbarung
          AertztlicherVorbericht
          NotwendigeVorbereitungenIds
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          kundenTerminBehandlungId
          owner
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        InPegassusErfasst
        HumanRequest {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        AIExecutionResponse {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        behandlungVorberichtId
        behandlungTherapieId
        behandlungHumanRequestId
        behandlungAIExecutionResponseId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieDiagnoseId
      therapieBehandlungId
      owner
      __typename
    }
  }
`;
export const onUpdateTherapie = /* GraphQL */ `
  subscription OnUpdateTherapie(
    $filter: ModelSubscriptionTherapieFilterInput
    $owner: String
  ) {
    onUpdateTherapie(filter: $filter, owner: $owner) {
      id
      Services {
        items {
          id
          Service
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieServicesId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Diagnose {
        id
        Diagnose
        Befunde {
          nextToken
          startedAt
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        diagnoseTherapieId
        owner
        __typename
      }
      Behandlung {
        id
        ErfassungsZeitpunkt
        Vorbericht {
          id
          KundenName
          KundenAnfrage
          TerminVreinbarung
          OrtsVereinbarung
          AertztlicherVorbericht
          NotwendigeVorbereitungenIds
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          kundenTerminBehandlungId
          owner
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        InPegassusErfasst
        HumanRequest {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        AIExecutionResponse {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        behandlungVorberichtId
        behandlungTherapieId
        behandlungHumanRequestId
        behandlungAIExecutionResponseId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieDiagnoseId
      therapieBehandlungId
      owner
      __typename
    }
  }
`;
export const onDeleteTherapie = /* GraphQL */ `
  subscription OnDeleteTherapie(
    $filter: ModelSubscriptionTherapieFilterInput
    $owner: String
  ) {
    onDeleteTherapie(filter: $filter, owner: $owner) {
      id
      Services {
        items {
          id
          Service
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieServicesId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Diagnose {
        id
        Diagnose
        Befunde {
          nextToken
          startedAt
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        diagnoseTherapieId
        owner
        __typename
      }
      Behandlung {
        id
        ErfassungsZeitpunkt
        Vorbericht {
          id
          KundenName
          KundenAnfrage
          TerminVreinbarung
          OrtsVereinbarung
          AertztlicherVorbericht
          NotwendigeVorbereitungenIds
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          kundenTerminBehandlungId
          owner
          __typename
        }
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        InPegassusErfasst
        HumanRequest {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        AIExecutionResponse {
          id
          StatementText
          DateTime
          ReplyToStatementId
          FollowUpToStatementId
          Done
          IdentifiedType
          IdentifiedTypeClass
          IdentifiedIntent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          conversationParticipantConversationStatementsId
          conversationStatementAudioSpeechRecordingId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        behandlungVorberichtId
        behandlungTherapieId
        behandlungHumanRequestId
        behandlungAIExecutionResponseId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieDiagnoseId
      therapieBehandlungId
      owner
      __typename
    }
  }
`;
export const onCreateTherapieService = /* GraphQL */ `
  subscription OnCreateTherapieService(
    $filter: ModelSubscriptionTherapieServiceFilterInput
    $owner: String
  ) {
    onCreateTherapieService(filter: $filter, owner: $owner) {
      id
      Service
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      EinsatzMittel {
        items {
          id
          Bezeichnung
          Menge
          Einheit
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieServiceEinsatzMittelId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieServicesId
      owner
      __typename
    }
  }
`;
export const onUpdateTherapieService = /* GraphQL */ `
  subscription OnUpdateTherapieService(
    $filter: ModelSubscriptionTherapieServiceFilterInput
    $owner: String
  ) {
    onUpdateTherapieService(filter: $filter, owner: $owner) {
      id
      Service
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      EinsatzMittel {
        items {
          id
          Bezeichnung
          Menge
          Einheit
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieServiceEinsatzMittelId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieServicesId
      owner
      __typename
    }
  }
`;
export const onDeleteTherapieService = /* GraphQL */ `
  subscription OnDeleteTherapieService(
    $filter: ModelSubscriptionTherapieServiceFilterInput
    $owner: String
  ) {
    onDeleteTherapieService(filter: $filter, owner: $owner) {
      id
      Service
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      EinsatzMittel {
        items {
          id
          Bezeichnung
          Menge
          Einheit
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieServiceEinsatzMittelId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieServicesId
      owner
      __typename
    }
  }
`;
export const onCreateTherapieEinsatzMittel = /* GraphQL */ `
  subscription OnCreateTherapieEinsatzMittel(
    $filter: ModelSubscriptionTherapieEinsatzMittelFilterInput
    $owner: String
  ) {
    onCreateTherapieEinsatzMittel(filter: $filter, owner: $owner) {
      id
      Bezeichnung
      Menge
      Einheit
      Service {
        id
        Service
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        EinsatzMittel {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieServicesId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieServiceEinsatzMittelId
      owner
      __typename
    }
  }
`;
export const onUpdateTherapieEinsatzMittel = /* GraphQL */ `
  subscription OnUpdateTherapieEinsatzMittel(
    $filter: ModelSubscriptionTherapieEinsatzMittelFilterInput
    $owner: String
  ) {
    onUpdateTherapieEinsatzMittel(filter: $filter, owner: $owner) {
      id
      Bezeichnung
      Menge
      Einheit
      Service {
        id
        Service
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        EinsatzMittel {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieServicesId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieServiceEinsatzMittelId
      owner
      __typename
    }
  }
`;
export const onDeleteTherapieEinsatzMittel = /* GraphQL */ `
  subscription OnDeleteTherapieEinsatzMittel(
    $filter: ModelSubscriptionTherapieEinsatzMittelFilterInput
    $owner: String
  ) {
    onDeleteTherapieEinsatzMittel(filter: $filter, owner: $owner) {
      id
      Bezeichnung
      Menge
      Einheit
      Service {
        id
        Service
        Therapie {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapieDiagnoseId
          therapieBehandlungId
          owner
          __typename
        }
        EinsatzMittel {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieServicesId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapieServiceEinsatzMittelId
      owner
      __typename
    }
  }
`;
export const onCreateBehandlung = /* GraphQL */ `
  subscription OnCreateBehandlung(
    $filter: ModelSubscriptionBehandlungFilterInput
    $owner: String
  ) {
    onCreateBehandlung(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Vorbericht {
        id
        KundenName
        KundenAnfrage
        TerminVreinbarung
        OrtsVereinbarung
        AertztlicherVorbericht
        NotwendigeVorbereitungenIds
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        kundenTerminBehandlungId
        owner
        __typename
      }
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      InPegassusErfasst
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      behandlungVorberichtId
      behandlungTherapieId
      behandlungHumanRequestId
      behandlungAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onUpdateBehandlung = /* GraphQL */ `
  subscription OnUpdateBehandlung(
    $filter: ModelSubscriptionBehandlungFilterInput
    $owner: String
  ) {
    onUpdateBehandlung(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Vorbericht {
        id
        KundenName
        KundenAnfrage
        TerminVreinbarung
        OrtsVereinbarung
        AertztlicherVorbericht
        NotwendigeVorbereitungenIds
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        kundenTerminBehandlungId
        owner
        __typename
      }
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      InPegassusErfasst
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      behandlungVorberichtId
      behandlungTherapieId
      behandlungHumanRequestId
      behandlungAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onDeleteBehandlung = /* GraphQL */ `
  subscription OnDeleteBehandlung(
    $filter: ModelSubscriptionBehandlungFilterInput
    $owner: String
  ) {
    onDeleteBehandlung(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Vorbericht {
        id
        KundenName
        KundenAnfrage
        TerminVreinbarung
        OrtsVereinbarung
        AertztlicherVorbericht
        NotwendigeVorbereitungenIds
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        kundenTerminBehandlungId
        owner
        __typename
      }
      Therapie {
        id
        Services {
          nextToken
          startedAt
          __typename
        }
        Diagnose {
          id
          Diagnose
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          diagnoseTherapieId
          owner
          __typename
        }
        Behandlung {
          id
          ErfassungsZeitpunkt
          InPegassusErfasst
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          behandlungVorberichtId
          behandlungTherapieId
          behandlungHumanRequestId
          behandlungAIExecutionResponseId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapieDiagnoseId
        therapieBehandlungId
        owner
        __typename
      }
      InPegassusErfasst
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      behandlungVorberichtId
      behandlungTherapieId
      behandlungHumanRequestId
      behandlungAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onCreateErkannteBehandlungsElemente = /* GraphQL */ `
  subscription OnCreateErkannteBehandlungsElemente(
    $filter: ModelSubscriptionErkannteBehandlungsElementeFilterInput
    $owner: String
  ) {
    onCreateErkannteBehandlungsElemente(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Kunde
      Tiere
      Vorbericht
      Befunde
      Diagnosen
      TherapieMassnahmen
      VerwendeteTherapieMittel
      AbgegebeneTherapieMittel
      InPegassusErfasst
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      erkannteBehandlungsElementeHumanRequestId
      erkannteBehandlungsElementeAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onUpdateErkannteBehandlungsElemente = /* GraphQL */ `
  subscription OnUpdateErkannteBehandlungsElemente(
    $filter: ModelSubscriptionErkannteBehandlungsElementeFilterInput
    $owner: String
  ) {
    onUpdateErkannteBehandlungsElemente(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Kunde
      Tiere
      Vorbericht
      Befunde
      Diagnosen
      TherapieMassnahmen
      VerwendeteTherapieMittel
      AbgegebeneTherapieMittel
      InPegassusErfasst
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      erkannteBehandlungsElementeHumanRequestId
      erkannteBehandlungsElementeAIExecutionResponseId
      owner
      __typename
    }
  }
`;
export const onDeleteErkannteBehandlungsElemente = /* GraphQL */ `
  subscription OnDeleteErkannteBehandlungsElemente(
    $filter: ModelSubscriptionErkannteBehandlungsElementeFilterInput
    $owner: String
  ) {
    onDeleteErkannteBehandlungsElemente(filter: $filter, owner: $owner) {
      id
      ErfassungsZeitpunkt
      Kunde
      Tiere
      Vorbericht
      Befunde
      Diagnosen
      TherapieMassnahmen
      VerwendeteTherapieMittel
      AbgegebeneTherapieMittel
      InPegassusErfasst
      HumanRequest {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      AIExecutionResponse {
        id
        StatementText
        Participant {
          id
          Name
          CognitoID
          Type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        DateTime
        ReplyToStatementId
        FollowUpToStatementId
        AudioSpeechRecording {
          id
          DateTime
          Filename
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          audioSpeechRecordingConversationStatementId
          owner
          __typename
        }
        Done
        IdentifiedType
        IdentifiedTypeClass
        IdentifiedIntent
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        conversationParticipantConversationStatementsId
        conversationStatementAudioSpeechRecordingId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      erkannteBehandlungsElementeHumanRequestId
      erkannteBehandlungsElementeAIExecutionResponseId
      owner
      __typename
    }
  }
`;
