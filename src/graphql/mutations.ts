/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProductProcurement = /* GraphQL */ `
  mutation CreateProductProcurement(
    $input: CreateProductProcurementInput!
    $condition: ModelProductProcurementConditionInput
  ) {
    createProductProcurement(input: $input, condition: $condition) {
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
export const updateProductProcurement = /* GraphQL */ `
  mutation UpdateProductProcurement(
    $input: UpdateProductProcurementInput!
    $condition: ModelProductProcurementConditionInput
  ) {
    updateProductProcurement(input: $input, condition: $condition) {
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
export const deleteProductProcurement = /* GraphQL */ `
  mutation DeleteProductProcurement(
    $input: DeleteProductProcurementInput!
    $condition: ModelProductProcurementConditionInput
  ) {
    deleteProductProcurement(input: $input, condition: $condition) {
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
export const createSupplierProduct = /* GraphQL */ `
  mutation CreateSupplierProduct(
    $input: CreateSupplierProductInput!
    $condition: ModelSupplierProductConditionInput
  ) {
    createSupplierProduct(input: $input, condition: $condition) {
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
export const updateSupplierProduct = /* GraphQL */ `
  mutation UpdateSupplierProduct(
    $input: UpdateSupplierProductInput!
    $condition: ModelSupplierProductConditionInput
  ) {
    updateSupplierProduct(input: $input, condition: $condition) {
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
export const deleteSupplierProduct = /* GraphQL */ `
  mutation DeleteSupplierProduct(
    $input: DeleteSupplierProductInput!
    $condition: ModelSupplierProductConditionInput
  ) {
    deleteSupplierProduct(input: $input, condition: $condition) {
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
export const createProductPrice = /* GraphQL */ `
  mutation CreateProductPrice(
    $input: CreateProductPriceInput!
    $condition: ModelProductPriceConditionInput
  ) {
    createProductPrice(input: $input, condition: $condition) {
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
export const updateProductPrice = /* GraphQL */ `
  mutation UpdateProductPrice(
    $input: UpdateProductPriceInput!
    $condition: ModelProductPriceConditionInput
  ) {
    updateProductPrice(input: $input, condition: $condition) {
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
export const deleteProductPrice = /* GraphQL */ `
  mutation DeleteProductPrice(
    $input: DeleteProductPriceInput!
    $condition: ModelProductPriceConditionInput
  ) {
    deleteProductPrice(input: $input, condition: $condition) {
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
export const createVetServiceType = /* GraphQL */ `
  mutation CreateVetServiceType(
    $input: CreateVetServiceTypeInput!
    $condition: ModelVetServiceTypeConditionInput
  ) {
    createVetServiceType(input: $input, condition: $condition) {
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
export const updateVetServiceType = /* GraphQL */ `
  mutation UpdateVetServiceType(
    $input: UpdateVetServiceTypeInput!
    $condition: ModelVetServiceTypeConditionInput
  ) {
    updateVetServiceType(input: $input, condition: $condition) {
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
export const deleteVetServiceType = /* GraphQL */ `
  mutation DeleteVetServiceType(
    $input: DeleteVetServiceTypeInput!
    $condition: ModelVetServiceTypeConditionInput
  ) {
    deleteVetServiceType(input: $input, condition: $condition) {
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
export const createVetService = /* GraphQL */ `
  mutation CreateVetService(
    $input: CreateVetServiceInput!
    $condition: ModelVetServiceConditionInput
  ) {
    createVetService(input: $input, condition: $condition) {
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
export const updateVetService = /* GraphQL */ `
  mutation UpdateVetService(
    $input: UpdateVetServiceInput!
    $condition: ModelVetServiceConditionInput
  ) {
    updateVetService(input: $input, condition: $condition) {
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
export const deleteVetService = /* GraphQL */ `
  mutation DeleteVetService(
    $input: DeleteVetServiceInput!
    $condition: ModelVetServiceConditionInput
  ) {
    deleteVetService(input: $input, condition: $condition) {
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
export const createVetMedicalProduct = /* GraphQL */ `
  mutation CreateVetMedicalProduct(
    $input: CreateVetMedicalProductInput!
    $condition: ModelVetMedicalProductConditionInput
  ) {
    createVetMedicalProduct(input: $input, condition: $condition) {
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
export const updateVetMedicalProduct = /* GraphQL */ `
  mutation UpdateVetMedicalProduct(
    $input: UpdateVetMedicalProductInput!
    $condition: ModelVetMedicalProductConditionInput
  ) {
    updateVetMedicalProduct(input: $input, condition: $condition) {
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
export const deleteVetMedicalProduct = /* GraphQL */ `
  mutation DeleteVetMedicalProduct(
    $input: DeleteVetMedicalProductInput!
    $condition: ModelVetMedicalProductConditionInput
  ) {
    deleteVetMedicalProduct(input: $input, condition: $condition) {
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
export const createVetProduct = /* GraphQL */ `
  mutation CreateVetProduct(
    $input: CreateVetProductInput!
    $condition: ModelVetProductConditionInput
  ) {
    createVetProduct(input: $input, condition: $condition) {
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
export const updateVetProduct = /* GraphQL */ `
  mutation UpdateVetProduct(
    $input: UpdateVetProductInput!
    $condition: ModelVetProductConditionInput
  ) {
    updateVetProduct(input: $input, condition: $condition) {
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
export const deleteVetProduct = /* GraphQL */ `
  mutation DeleteVetProduct(
    $input: DeleteVetProductInput!
    $condition: ModelVetProductConditionInput
  ) {
    deleteVetProduct(input: $input, condition: $condition) {
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
export const createSupplier = /* GraphQL */ `
  mutation CreateSupplier(
    $input: CreateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    createSupplier(input: $input, condition: $condition) {
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
export const updateSupplier = /* GraphQL */ `
  mutation UpdateSupplier(
    $input: UpdateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    updateSupplier(input: $input, condition: $condition) {
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
export const deleteSupplier = /* GraphQL */ `
  mutation DeleteSupplier(
    $input: DeleteSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    deleteSupplier(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createCompanyLocation = /* GraphQL */ `
  mutation CreateCompanyLocation(
    $input: CreateCompanyLocationInput!
    $condition: ModelCompanyLocationConditionInput
  ) {
    createCompanyLocation(input: $input, condition: $condition) {
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
export const updateCompanyLocation = /* GraphQL */ `
  mutation UpdateCompanyLocation(
    $input: UpdateCompanyLocationInput!
    $condition: ModelCompanyLocationConditionInput
  ) {
    updateCompanyLocation(input: $input, condition: $condition) {
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
export const deleteCompanyLocation = /* GraphQL */ `
  mutation DeleteCompanyLocation(
    $input: DeleteCompanyLocationInput!
    $condition: ModelCompanyLocationConditionInput
  ) {
    deleteCompanyLocation(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createAnimalType = /* GraphQL */ `
  mutation CreateAnimalType(
    $input: CreateAnimalTypeInput!
    $condition: ModelAnimalTypeConditionInput
  ) {
    createAnimalType(input: $input, condition: $condition) {
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
export const updateAnimalType = /* GraphQL */ `
  mutation UpdateAnimalType(
    $input: UpdateAnimalTypeInput!
    $condition: ModelAnimalTypeConditionInput
  ) {
    updateAnimalType(input: $input, condition: $condition) {
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
export const deleteAnimalType = /* GraphQL */ `
  mutation DeleteAnimalType(
    $input: DeleteAnimalTypeInput!
    $condition: ModelAnimalTypeConditionInput
  ) {
    deleteAnimalType(input: $input, condition: $condition) {
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
export const createAnimalRace = /* GraphQL */ `
  mutation CreateAnimalRace(
    $input: CreateAnimalRaceInput!
    $condition: ModelAnimalRaceConditionInput
  ) {
    createAnimalRace(input: $input, condition: $condition) {
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
export const updateAnimalRace = /* GraphQL */ `
  mutation UpdateAnimalRace(
    $input: UpdateAnimalRaceInput!
    $condition: ModelAnimalRaceConditionInput
  ) {
    updateAnimalRace(input: $input, condition: $condition) {
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
export const deleteAnimalRace = /* GraphQL */ `
  mutation DeleteAnimalRace(
    $input: DeleteAnimalRaceInput!
    $condition: ModelAnimalRaceConditionInput
  ) {
    deleteAnimalRace(input: $input, condition: $condition) {
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
export const createAnimal = /* GraphQL */ `
  mutation CreateAnimal(
    $input: CreateAnimalInput!
    $condition: ModelAnimalConditionInput
  ) {
    createAnimal(input: $input, condition: $condition) {
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
export const updateAnimal = /* GraphQL */ `
  mutation UpdateAnimal(
    $input: UpdateAnimalInput!
    $condition: ModelAnimalConditionInput
  ) {
    updateAnimal(input: $input, condition: $condition) {
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
export const deleteAnimal = /* GraphQL */ `
  mutation DeleteAnimal(
    $input: DeleteAnimalInput!
    $condition: ModelAnimalConditionInput
  ) {
    deleteAnimal(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createPersonTitle = /* GraphQL */ `
  mutation CreatePersonTitle(
    $input: CreatePersonTitleInput!
    $condition: ModelPersonTitleConditionInput
  ) {
    createPersonTitle(input: $input, condition: $condition) {
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
export const updatePersonTitle = /* GraphQL */ `
  mutation UpdatePersonTitle(
    $input: UpdatePersonTitleInput!
    $condition: ModelPersonTitleConditionInput
  ) {
    updatePersonTitle(input: $input, condition: $condition) {
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
export const deletePersonTitle = /* GraphQL */ `
  mutation DeletePersonTitle(
    $input: DeletePersonTitleInput!
    $condition: ModelPersonTitleConditionInput
  ) {
    deletePersonTitle(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createConversationStatement = /* GraphQL */ `
  mutation CreateConversationStatement(
    $input: CreateConversationStatementInput!
    $condition: ModelConversationStatementConditionInput
  ) {
    createConversationStatement(input: $input, condition: $condition) {
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
export const updateConversationStatement = /* GraphQL */ `
  mutation UpdateConversationStatement(
    $input: UpdateConversationStatementInput!
    $condition: ModelConversationStatementConditionInput
  ) {
    updateConversationStatement(input: $input, condition: $condition) {
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
export const deleteConversationStatement = /* GraphQL */ `
  mutation DeleteConversationStatement(
    $input: DeleteConversationStatementInput!
    $condition: ModelConversationStatementConditionInput
  ) {
    deleteConversationStatement(input: $input, condition: $condition) {
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
export const createConversationParticipant = /* GraphQL */ `
  mutation CreateConversationParticipant(
    $input: CreateConversationParticipantInput!
    $condition: ModelConversationParticipantConditionInput
  ) {
    createConversationParticipant(input: $input, condition: $condition) {
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
export const updateConversationParticipant = /* GraphQL */ `
  mutation UpdateConversationParticipant(
    $input: UpdateConversationParticipantInput!
    $condition: ModelConversationParticipantConditionInput
  ) {
    updateConversationParticipant(input: $input, condition: $condition) {
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
export const deleteConversationParticipant = /* GraphQL */ `
  mutation DeleteConversationParticipant(
    $input: DeleteConversationParticipantInput!
    $condition: ModelConversationParticipantConditionInput
  ) {
    deleteConversationParticipant(input: $input, condition: $condition) {
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
export const createAudioSpeechRecording = /* GraphQL */ `
  mutation CreateAudioSpeechRecording(
    $input: CreateAudioSpeechRecordingInput!
    $condition: ModelAudioSpeechRecordingConditionInput
  ) {
    createAudioSpeechRecording(input: $input, condition: $condition) {
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
export const updateAudioSpeechRecording = /* GraphQL */ `
  mutation UpdateAudioSpeechRecording(
    $input: UpdateAudioSpeechRecordingInput!
    $condition: ModelAudioSpeechRecordingConditionInput
  ) {
    updateAudioSpeechRecording(input: $input, condition: $condition) {
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
export const deleteAudioSpeechRecording = /* GraphQL */ `
  mutation DeleteAudioSpeechRecording(
    $input: DeleteAudioSpeechRecordingInput!
    $condition: ModelAudioSpeechRecordingConditionInput
  ) {
    deleteAudioSpeechRecording(input: $input, condition: $condition) {
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
export const createAITransaction = /* GraphQL */ `
  mutation CreateAITransaction(
    $input: CreateAITransactionInput!
    $condition: ModelAITransactionConditionInput
  ) {
    createAITransaction(input: $input, condition: $condition) {
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
export const updateAITransaction = /* GraphQL */ `
  mutation UpdateAITransaction(
    $input: UpdateAITransactionInput!
    $condition: ModelAITransactionConditionInput
  ) {
    updateAITransaction(input: $input, condition: $condition) {
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
export const deleteAITransaction = /* GraphQL */ `
  mutation DeleteAITransaction(
    $input: DeleteAITransactionInput!
    $condition: ModelAITransactionConditionInput
  ) {
    deleteAITransaction(input: $input, condition: $condition) {
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
export const createReminder = /* GraphQL */ `
  mutation CreateReminder(
    $input: CreateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    createReminder(input: $input, condition: $condition) {
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
export const updateReminder = /* GraphQL */ `
  mutation UpdateReminder(
    $input: UpdateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    updateReminder(input: $input, condition: $condition) {
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
export const deleteReminder = /* GraphQL */ `
  mutation DeleteReminder(
    $input: DeleteReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    deleteReminder(input: $input, condition: $condition) {
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
export const createKundenTermin = /* GraphQL */ `
  mutation CreateKundenTermin(
    $input: CreateKundenTerminInput!
    $condition: ModelKundenTerminConditionInput
  ) {
    createKundenTermin(input: $input, condition: $condition) {
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
export const updateKundenTermin = /* GraphQL */ `
  mutation UpdateKundenTermin(
    $input: UpdateKundenTerminInput!
    $condition: ModelKundenTerminConditionInput
  ) {
    updateKundenTermin(input: $input, condition: $condition) {
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
export const deleteKundenTermin = /* GraphQL */ `
  mutation DeleteKundenTermin(
    $input: DeleteKundenTerminInput!
    $condition: ModelKundenTerminConditionInput
  ) {
    deleteKundenTermin(input: $input, condition: $condition) {
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
export const createUntersuchungsBefund = /* GraphQL */ `
  mutation CreateUntersuchungsBefund(
    $input: CreateUntersuchungsBefundInput!
    $condition: ModelUntersuchungsBefundConditionInput
  ) {
    createUntersuchungsBefund(input: $input, condition: $condition) {
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
export const updateUntersuchungsBefund = /* GraphQL */ `
  mutation UpdateUntersuchungsBefund(
    $input: UpdateUntersuchungsBefundInput!
    $condition: ModelUntersuchungsBefundConditionInput
  ) {
    updateUntersuchungsBefund(input: $input, condition: $condition) {
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
export const deleteUntersuchungsBefund = /* GraphQL */ `
  mutation DeleteUntersuchungsBefund(
    $input: DeleteUntersuchungsBefundInput!
    $condition: ModelUntersuchungsBefundConditionInput
  ) {
    deleteUntersuchungsBefund(input: $input, condition: $condition) {
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
export const createDiagnose = /* GraphQL */ `
  mutation CreateDiagnose(
    $input: CreateDiagnoseInput!
    $condition: ModelDiagnoseConditionInput
  ) {
    createDiagnose(input: $input, condition: $condition) {
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
export const updateDiagnose = /* GraphQL */ `
  mutation UpdateDiagnose(
    $input: UpdateDiagnoseInput!
    $condition: ModelDiagnoseConditionInput
  ) {
    updateDiagnose(input: $input, condition: $condition) {
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
export const deleteDiagnose = /* GraphQL */ `
  mutation DeleteDiagnose(
    $input: DeleteDiagnoseInput!
    $condition: ModelDiagnoseConditionInput
  ) {
    deleteDiagnose(input: $input, condition: $condition) {
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
export const createTherapie = /* GraphQL */ `
  mutation CreateTherapie(
    $input: CreateTherapieInput!
    $condition: ModelTherapieConditionInput
  ) {
    createTherapie(input: $input, condition: $condition) {
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
export const updateTherapie = /* GraphQL */ `
  mutation UpdateTherapie(
    $input: UpdateTherapieInput!
    $condition: ModelTherapieConditionInput
  ) {
    updateTherapie(input: $input, condition: $condition) {
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
export const deleteTherapie = /* GraphQL */ `
  mutation DeleteTherapie(
    $input: DeleteTherapieInput!
    $condition: ModelTherapieConditionInput
  ) {
    deleteTherapie(input: $input, condition: $condition) {
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
export const createTherapieService = /* GraphQL */ `
  mutation CreateTherapieService(
    $input: CreateTherapieServiceInput!
    $condition: ModelTherapieServiceConditionInput
  ) {
    createTherapieService(input: $input, condition: $condition) {
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
export const updateTherapieService = /* GraphQL */ `
  mutation UpdateTherapieService(
    $input: UpdateTherapieServiceInput!
    $condition: ModelTherapieServiceConditionInput
  ) {
    updateTherapieService(input: $input, condition: $condition) {
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
export const deleteTherapieService = /* GraphQL */ `
  mutation DeleteTherapieService(
    $input: DeleteTherapieServiceInput!
    $condition: ModelTherapieServiceConditionInput
  ) {
    deleteTherapieService(input: $input, condition: $condition) {
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
export const createTherapieEinsatzMittel = /* GraphQL */ `
  mutation CreateTherapieEinsatzMittel(
    $input: CreateTherapieEinsatzMittelInput!
    $condition: ModelTherapieEinsatzMittelConditionInput
  ) {
    createTherapieEinsatzMittel(input: $input, condition: $condition) {
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
export const updateTherapieEinsatzMittel = /* GraphQL */ `
  mutation UpdateTherapieEinsatzMittel(
    $input: UpdateTherapieEinsatzMittelInput!
    $condition: ModelTherapieEinsatzMittelConditionInput
  ) {
    updateTherapieEinsatzMittel(input: $input, condition: $condition) {
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
export const deleteTherapieEinsatzMittel = /* GraphQL */ `
  mutation DeleteTherapieEinsatzMittel(
    $input: DeleteTherapieEinsatzMittelInput!
    $condition: ModelTherapieEinsatzMittelConditionInput
  ) {
    deleteTherapieEinsatzMittel(input: $input, condition: $condition) {
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
export const createBehandlung = /* GraphQL */ `
  mutation CreateBehandlung(
    $input: CreateBehandlungInput!
    $condition: ModelBehandlungConditionInput
  ) {
    createBehandlung(input: $input, condition: $condition) {
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
export const updateBehandlung = /* GraphQL */ `
  mutation UpdateBehandlung(
    $input: UpdateBehandlungInput!
    $condition: ModelBehandlungConditionInput
  ) {
    updateBehandlung(input: $input, condition: $condition) {
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
export const deleteBehandlung = /* GraphQL */ `
  mutation DeleteBehandlung(
    $input: DeleteBehandlungInput!
    $condition: ModelBehandlungConditionInput
  ) {
    deleteBehandlung(input: $input, condition: $condition) {
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
export const createErkannteBehandlungsElemente = /* GraphQL */ `
  mutation CreateErkannteBehandlungsElemente(
    $input: CreateErkannteBehandlungsElementeInput!
    $condition: ModelErkannteBehandlungsElementeConditionInput
  ) {
    createErkannteBehandlungsElemente(input: $input, condition: $condition) {
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
export const updateErkannteBehandlungsElemente = /* GraphQL */ `
  mutation UpdateErkannteBehandlungsElemente(
    $input: UpdateErkannteBehandlungsElementeInput!
    $condition: ModelErkannteBehandlungsElementeConditionInput
  ) {
    updateErkannteBehandlungsElemente(input: $input, condition: $condition) {
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
export const deleteErkannteBehandlungsElemente = /* GraphQL */ `
  mutation DeleteErkannteBehandlungsElemente(
    $input: DeleteErkannteBehandlungsElementeInput!
    $condition: ModelErkannteBehandlungsElementeConditionInput
  ) {
    deleteErkannteBehandlungsElemente(input: $input, condition: $condition) {
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
