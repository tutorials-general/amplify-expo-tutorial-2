/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItemDetail = /* GraphQL */ `
  subscription OnCreateItemDetail {
    onCreateItemDetail {
      id
      product {
        name
        manufacturer
        modelNo
        price
      }
      confirmedPrice
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onUpdateItemDetail = /* GraphQL */ `
  subscription OnUpdateItemDetail {
    onUpdateItemDetail {
      id
      product {
        name
        manufacturer
        modelNo
        price
      }
      confirmedPrice
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onDeleteItemDetail = /* GraphQL */ `
  subscription OnDeleteItemDetail {
    onDeleteItemDetail {
      id
      product {
        name
        manufacturer
        modelNo
        price
      }
      confirmedPrice
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onCreateShipping = /* GraphQL */ `
  subscription OnCreateShipping {
    onCreateShipping {
      id
      receipt
      status
      addressID
      address {
        id
        addressMain
        addressDetail
        receiverName
        phoneNumber
        userID
        shipping {
          nextToken
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
      }
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onUpdateShipping = /* GraphQL */ `
  subscription OnUpdateShipping {
    onUpdateShipping {
      id
      receipt
      status
      addressID
      address {
        id
        addressMain
        addressDetail
        receiverName
        phoneNumber
        userID
        shipping {
          nextToken
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
      }
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onDeleteShipping = /* GraphQL */ `
  subscription OnDeleteShipping {
    onDeleteShipping {
      id
      receipt
      status
      addressID
      address {
        id
        addressMain
        addressDetail
        receiverName
        phoneNumber
        userID
        shipping {
          nextToken
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
      }
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onCreateSprinkle = /* GraphQL */ `
  subscription OnCreateSprinkle {
    onCreateSprinkle {
      id
      amount
      currency
      message
      userID
      cakeID
      payment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
      owner
    }
  }
`;
export const onUpdateSprinkle = /* GraphQL */ `
  subscription OnUpdateSprinkle {
    onUpdateSprinkle {
      id
      amount
      currency
      message
      userID
      cakeID
      payment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
      owner
    }
  }
`;
export const onDeleteSprinkle = /* GraphQL */ `
  subscription OnDeleteSprinkle {
    onDeleteSprinkle {
      id
      amount
      currency
      message
      userID
      cakeID
      payment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
      owner
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      title
      content
      status
      reply {
        createdAt
        content
      }
      userID
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      title
      content
      status
      reply {
        createdAt
        content
      }
      userID
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      title
      content
      status
      reply {
        createdAt
        content
      }
      userID
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      id
      addressMain
      addressDetail
      receiverName
      phoneNumber
      userID
      shipping {
        items {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      addressMain
      addressDetail
      receiverName
      phoneNumber
      userID
      shipping {
        items {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      addressMain
      addressDetail
      receiverName
      phoneNumber
      userID
      shipping {
        items {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment {
    onCreatePayment {
      id
      type
      status
      amount
      virtualAccountNumber
      cakeID
      sprinkleID
      sprinkle {
        id
        amount
        currency
        message
        userID
        cakeID
        payment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment {
    onUpdatePayment {
      id
      type
      status
      amount
      virtualAccountNumber
      cakeID
      sprinkleID
      sprinkle {
        id
        amount
        currency
        message
        userID
        cakeID
        payment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment {
    onDeletePayment {
      id
      type
      status
      amount
      virtualAccountNumber
      cakeID
      sprinkleID
      sprinkle {
        id
        amount
        currency
        message
        userID
        cakeID
        payment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const onCreateNotice = /* GraphQL */ `
  subscription OnCreateNotice {
    onCreateNotice {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNotice = /* GraphQL */ `
  subscription OnUpdateNotice {
    onUpdateNotice {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNotice = /* GraphQL */ `
  subscription OnDeleteNotice {
    onDeleteNotice {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      fullName
      birthday
      gender
      allowNotification
      isAgreeTermOfService
      isAgreeMarketingReceivement
      isAgreePrivacyPolicy
      owner
      email
      phoneNumber
      addresses {
        items {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      questions {
        items {
          id
          title
          content
          status
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      cakes {
        items {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      fullName
      birthday
      gender
      allowNotification
      isAgreeTermOfService
      isAgreeMarketingReceivement
      isAgreePrivacyPolicy
      owner
      email
      phoneNumber
      addresses {
        items {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      questions {
        items {
          id
          title
          content
          status
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      cakes {
        items {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      fullName
      birthday
      gender
      allowNotification
      isAgreeTermOfService
      isAgreeMarketingReceivement
      isAgreePrivacyPolicy
      owner
      email
      phoneNumber
      addresses {
        items {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      questions {
        items {
          id
          title
          content
          status
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      cakes {
        items {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateCake = /* GraphQL */ `
  subscription OnCreateCake {
    onCreateCake {
      id
      itemImageKey
      title
      content
      dueDate
      status
      userID
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      itemDetail {
        items {
          id
          confirmedPrice
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      shipping {
        id
        receipt
        status
        addressID
        address {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        cakeID
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      selfPayment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateCake = /* GraphQL */ `
  subscription OnUpdateCake {
    onUpdateCake {
      id
      itemImageKey
      title
      content
      dueDate
      status
      userID
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      itemDetail {
        items {
          id
          confirmedPrice
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      shipping {
        id
        receipt
        status
        addressID
        address {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        cakeID
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      selfPayment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteCake = /* GraphQL */ `
  subscription OnDeleteCake {
    onDeleteCake {
      id
      itemImageKey
      title
      content
      dueDate
      status
      userID
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      itemDetail {
        items {
          id
          confirmedPrice
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      shipping {
        id
        receipt
        status
        addressID
        address {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        cakeID
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      selfPayment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      owner
    }
  }
`;
