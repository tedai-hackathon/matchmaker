/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductProcurement = /* GraphQL */ `
  query GetProductProcurement($id: ID!) {
    getProductProcurement(id: $id) {
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
export const listProductProcurements = /* GraphQL */ `
  query ListProductProcurements(
    $filter: ModelProductProcurementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductProcurements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncProductProcurements = /* GraphQL */ `
  query SyncProductProcurements(
    $filter: ModelProductProcurementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductProcurements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const productProcurementsBySupplierproductID = /* GraphQL */ `
  query ProductProcurementsBySupplierproductID(
    $supplierproductID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductProcurementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productProcurementsBySupplierproductID(
      supplierproductID: $supplierproductID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSupplierProduct = /* GraphQL */ `
  query GetSupplierProduct($id: ID!) {
    getSupplierProduct(id: $id) {
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
export const listSupplierProducts = /* GraphQL */ `
  query ListSupplierProducts(
    $filter: ModelSupplierProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupplierProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ProductProcurements {
          nextToken
          startedAt
          __typename
        }
        VetProduct {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSupplierProducts = /* GraphQL */ `
  query SyncSupplierProducts(
    $filter: ModelSupplierProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSupplierProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ProductProcurements {
          nextToken
          startedAt
          __typename
        }
        VetProduct {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProductPrice = /* GraphQL */ `
  query GetProductPrice($id: ID!) {
    getProductPrice(id: $id) {
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
export const listProductPrices = /* GraphQL */ `
  query ListProductPrices(
    $filter: ModelProductPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CreatedAt
        ValidFrom
        ValidTo
        Price
        Currency
        VetProduct {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProductPrices = /* GraphQL */ `
  query SyncProductPrices(
    $filter: ModelProductPriceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductPrices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        CreatedAt
        ValidFrom
        ValidTo
        Price
        Currency
        VetProduct {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVetServiceType = /* GraphQL */ `
  query GetVetServiceType($id: ID!) {
    getVetServiceType(id: $id) {
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
export const listVetServiceTypes = /* GraphQL */ `
  query ListVetServiceTypes(
    $filter: ModelVetServiceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVetServiceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVetServiceTypes = /* GraphQL */ `
  query SyncVetServiceTypes(
    $filter: ModelVetServiceTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVetServiceTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVetService = /* GraphQL */ `
  query GetVetService($id: ID!) {
    getVetService(id: $id) {
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
export const listVetServices = /* GraphQL */ `
  query ListVetServices(
    $filter: ModelVetServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVetServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVetServices = /* GraphQL */ `
  query SyncVetServices(
    $filter: ModelVetServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVetServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVetMedicalProduct = /* GraphQL */ `
  query GetVetMedicalProduct($id: ID!) {
    getVetMedicalProduct(id: $id) {
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
export const listVetMedicalProducts = /* GraphQL */ `
  query ListVetMedicalProducts(
    $filter: ModelVetMedicalProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVetMedicalProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        VetProduct {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVetMedicalProducts = /* GraphQL */ `
  query SyncVetMedicalProducts(
    $filter: ModelVetMedicalProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVetMedicalProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        VetProduct {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVetProduct = /* GraphQL */ `
  query GetVetProduct($id: ID!) {
    getVetProduct(id: $id) {
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
export const listVetProducts = /* GraphQL */ `
  query ListVetProducts(
    $filter: ModelVetProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVetProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVetProducts = /* GraphQL */ `
  query SyncVetProducts(
    $filter: ModelVetProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVetProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSupplier = /* GraphQL */ `
  query GetSupplier($id: ID!) {
    getSupplier(id: $id) {
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
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        InternalSuplierID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supplierCompanyId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSuppliers = /* GraphQL */ `
  query SyncSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuppliers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        InternalSuplierID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supplierCompanyId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCompanyLocation = /* GraphQL */ `
  query GetCompanyLocation($id: ID!) {
    getCompanyLocation(id: $id) {
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
export const listCompanyLocations = /* GraphQL */ `
  query ListCompanyLocations(
    $filter: ModelCompanyLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          NameAbbreviation
          TaxID
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCompanyLocations = /* GraphQL */ `
  query SyncCompanyLocations(
    $filter: ModelCompanyLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanyLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          NameAbbreviation
          TaxID
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAnimalType = /* GraphQL */ `
  query GetAnimalType($id: ID!) {
    getAnimalType(id: $id) {
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
export const listAnimalTypes = /* GraphQL */ `
  query ListAnimalTypes(
    $filter: ModelAnimalTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAnimalTypes = /* GraphQL */ `
  query SyncAnimalTypes(
    $filter: ModelAnimalTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnimalTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAnimalRace = /* GraphQL */ `
  query GetAnimalRace($id: ID!) {
    getAnimalRace(id: $id) {
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
export const listAnimalRaces = /* GraphQL */ `
  query ListAnimalRaces(
    $filter: ModelAnimalRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAnimalRaces = /* GraphQL */ `
  query SyncAnimalRaces(
    $filter: ModelAnimalRaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnimalRaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAnimal = /* GraphQL */ `
  query GetAnimal($id: ID!) {
    getAnimal(id: $id) {
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
export const listAnimals = /* GraphQL */ `
  query ListAnimals(
    $filter: ModelAnimalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        AnimalRace {
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
        Name
        Color
        ProductID
        NameAbbreviation
        Customer {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAnimals = /* GraphQL */ `
  query SyncAnimals(
    $filter: ModelAnimalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnimals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        AnimalRace {
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
        Name
        Color
        ProductID
        NameAbbreviation
        Customer {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPersonTitle = /* GraphQL */ `
  query GetPersonTitle($id: ID!) {
    getPersonTitle(id: $id) {
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
export const listPersonTitles = /* GraphQL */ `
  query ListPersonTitles(
    $filter: ModelPersonTitleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonTitles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPersonTitles = /* GraphQL */ `
  query SyncPersonTitles(
    $filter: ModelPersonTitleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPersonTitles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getConversationStatement = /* GraphQL */ `
  query GetConversationStatement($id: ID!) {
    getConversationStatement(id: $id) {
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
export const listConversationStatements = /* GraphQL */ `
  query ListConversationStatements(
    $filter: ModelConversationStatementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationStatements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncConversationStatements = /* GraphQL */ `
  query SyncConversationStatements(
    $filter: ModelConversationStatementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversationStatements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getConversationParticipant = /* GraphQL */ `
  query GetConversationParticipant($id: ID!) {
    getConversationParticipant(id: $id) {
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
export const listConversationParticipants = /* GraphQL */ `
  query ListConversationParticipants(
    $filter: ModelConversationParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncConversationParticipants = /* GraphQL */ `
  query SyncConversationParticipants(
    $filter: ModelConversationParticipantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversationParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAudioSpeechRecording = /* GraphQL */ `
  query GetAudioSpeechRecording($id: ID!) {
    getAudioSpeechRecording(id: $id) {
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
export const listAudioSpeechRecordings = /* GraphQL */ `
  query ListAudioSpeechRecordings(
    $filter: ModelAudioSpeechRecordingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudioSpeechRecordings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAudioSpeechRecordings = /* GraphQL */ `
  query SyncAudioSpeechRecordings(
    $filter: ModelAudioSpeechRecordingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAudioSpeechRecordings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAITransaction = /* GraphQL */ `
  query GetAITransaction($id: ID!) {
    getAITransaction(id: $id) {
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
export const listAITransactions = /* GraphQL */ `
  query ListAITransactions(
    $filter: ModelAITransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAITransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        aITransactionConversationStatementId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAITransactions = /* GraphQL */ `
  query SyncAITransactions(
    $filter: ModelAITransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAITransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        aITransactionConversationStatementId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getReminder = /* GraphQL */ `
  query GetReminder($id: ID!) {
    getReminder(id: $id) {
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
export const listReminders = /* GraphQL */ `
  query ListReminders(
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReminders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ErfassungsZeitpunkt
        Thema
        Termin
        Details
        Done
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
        reminderHumanRequestId
        reminderAIExecutionResponseId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReminders = /* GraphQL */ `
  query SyncReminders(
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReminders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ErfassungsZeitpunkt
        Thema
        Termin
        Details
        Done
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
        reminderHumanRequestId
        reminderAIExecutionResponseId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getKundenTermin = /* GraphQL */ `
  query GetKundenTermin($id: ID!) {
    getKundenTermin(id: $id) {
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
export const listKundenTermins = /* GraphQL */ `
  query ListKundenTermins(
    $filter: ModelKundenTerminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKundenTermins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncKundenTermins = /* GraphQL */ `
  query SyncKundenTermins(
    $filter: ModelKundenTerminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncKundenTermins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUntersuchungsBefund = /* GraphQL */ `
  query GetUntersuchungsBefund($id: ID!) {
    getUntersuchungsBefund(id: $id) {
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
export const listUntersuchungsBefunds = /* GraphQL */ `
  query ListUntersuchungsBefunds(
    $filter: ModelUntersuchungsBefundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUntersuchungsBefunds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        TierArt
        TierNameOderKennung
        Befund
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
  }
`;
export const syncUntersuchungsBefunds = /* GraphQL */ `
  query SyncUntersuchungsBefunds(
    $filter: ModelUntersuchungsBefundFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUntersuchungsBefunds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TierArt
        TierNameOderKennung
        Befund
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
  }
`;
export const getDiagnose = /* GraphQL */ `
  query GetDiagnose($id: ID!) {
    getDiagnose(id: $id) {
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
export const listDiagnoses = /* GraphQL */ `
  query ListDiagnoses(
    $filter: ModelDiagnoseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiagnoses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDiagnoses = /* GraphQL */ `
  query SyncDiagnoses(
    $filter: ModelDiagnoseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiagnoses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTherapie = /* GraphQL */ `
  query GetTherapie($id: ID!) {
    getTherapie(id: $id) {
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
export const listTherapies = /* GraphQL */ `
  query ListTherapies(
    $filter: ModelTherapieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTherapies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTherapies = /* GraphQL */ `
  query SyncTherapies(
    $filter: ModelTherapieFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTherapies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTherapieService = /* GraphQL */ `
  query GetTherapieService($id: ID!) {
    getTherapieService(id: $id) {
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
export const listTherapieServices = /* GraphQL */ `
  query ListTherapieServices(
    $filter: ModelTherapieServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTherapieServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTherapieServices = /* GraphQL */ `
  query SyncTherapieServices(
    $filter: ModelTherapieServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTherapieServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTherapieEinsatzMittel = /* GraphQL */ `
  query GetTherapieEinsatzMittel($id: ID!) {
    getTherapieEinsatzMittel(id: $id) {
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
export const listTherapieEinsatzMittels = /* GraphQL */ `
  query ListTherapieEinsatzMittels(
    $filter: ModelTherapieEinsatzMittelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTherapieEinsatzMittels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Bezeichnung
        Menge
        Einheit
        Service {
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
  }
`;
export const syncTherapieEinsatzMittels = /* GraphQL */ `
  query SyncTherapieEinsatzMittels(
    $filter: ModelTherapieEinsatzMittelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTherapieEinsatzMittels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Bezeichnung
        Menge
        Einheit
        Service {
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
  }
`;
export const getBehandlung = /* GraphQL */ `
  query GetBehandlung($id: ID!) {
    getBehandlung(id: $id) {
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
export const listBehandlungs = /* GraphQL */ `
  query ListBehandlungs(
    $filter: ModelBehandlungFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBehandlungs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBehandlungs = /* GraphQL */ `
  query SyncBehandlungs(
    $filter: ModelBehandlungFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBehandlungs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getErkannteBehandlungsElemente = /* GraphQL */ `
  query GetErkannteBehandlungsElemente($id: ID!) {
    getErkannteBehandlungsElemente(id: $id) {
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
export const listErkannteBehandlungsElementes = /* GraphQL */ `
  query ListErkannteBehandlungsElementes(
    $filter: ModelErkannteBehandlungsElementeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listErkannteBehandlungsElementes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        erkannteBehandlungsElementeHumanRequestId
        erkannteBehandlungsElementeAIExecutionResponseId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncErkannteBehandlungsElementes = /* GraphQL */ `
  query SyncErkannteBehandlungsElementes(
    $filter: ModelErkannteBehandlungsElementeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncErkannteBehandlungsElementes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        erkannteBehandlungsElementeHumanRequestId
        erkannteBehandlungsElementeAIExecutionResponseId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
