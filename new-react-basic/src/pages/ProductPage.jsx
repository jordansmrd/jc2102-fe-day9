import { Button, Center, Box, Text, Flex, Input, FormLabel } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../configs/api'

function ProductCard(props) {
    return (
        <Box padding={6} 
        borderColor="gray"
        borderWidth={3}
        borderRadius={8} 
        margin={2}
       
        wrap="wrap"
        >
            <Text fontSize="large" fontWeight="bold" > {props.productName}</Text>
            <Text> Rp. {props.price}</Text>
            <Text> {props.category}</Text>
        </Box>

    )
}

function ProductPage(){

    const [dataProducts,setDataProducts] = useState([])
    const [inputText, setInputText] = useState("")
    const [searchInput, setSearchInput  ] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const [TotalPage,setTotalPage] = useState(1)

    const pageLimit = 5

    function inputHandler(event) {
        const { value } = event.target;
        // alert(value)
        setInputText(value)
    }

    function searchProduct() {
        // setSearchInput(inputText)
        setCurrentPage(1)

        fetchProducts({
            params: 
            {
            productName: inputText ? inputText : undefined,
            _limit: pageLimit,
            _page: 1
            }
        })
        CheckPage();
    }
    
    // function fetchProducts(){
    //    axiosInstance.get("/products/").then((res)=> {
    //        setDataProducts(res.data)
    //    }).catch((err)=>{
    //     console.log(err)
    //     alert("Terjadi Kesalahan Pada Server")
    //    })
    // }

    function CheckPage()
    {
     axiosInstance.get("/products/",
        { 
            params : {
                productName: inputText ? inputText : undefined
                        }}
        
         ).then((res)=> {
    
            let length = res.data.length
            let sPage = parseInt(length/pageLimit);
            let mPage = parseInt(length%pageLimit);
            let check = (sPage > 0 ? sPage : 0) + (mPage > 0 ? 1 : 0)

            setTotalPage(check)

        }).catch((err)=>{
         console.log(err)
         alert("Terjadi Kesalahan Pada Server")
        })

    }

    function fetchProducts(param = { 
        params : {
            productName : undefined,
            _limit:pageLimit,
            _page:currentPage
        }})
        {
        axiosInstance.get("/products/" ,
        param
         ).then((res)=> {
            setDataProducts(res.data)
        }).catch((err)=>{
         console.log(err)
         alert("Terjadi Kesalahan Pada Server")
        })
     }

     function changePage(direction=""){
         let newPage = currentPage
         if(direction === "next" &&  currentPage !== TotalPage
         )
         {
             newPage++
         }
         else if(direction ==="previous" && newPage !==  1
         ) 
         {
             newPage--
         }

         setCurrentPage(newPage)
         fetchProducts({
            params: 
            {
            productName: inputText ? inputText : undefined,
            _limit: pageLimit,
            _page: newPage

            }
        })
     }


    function renderProduct(){
        return (
        dataProducts.map((val) => {
            // if(val.productName.toLowerCase().includes(searchInput.toLowerCase()))
            return (
                <ProductCard
                productName={val.productName}
                price={val.price}
                category={val.category}
                />
            )
        })     
        )
    }

    useEffect(()=>{
        fetchProducts()
        CheckPage()
    },[])

    return (
       <>
       <Center margin={2}>
        <Box width="xl" >
            <Text fontSize="2xl" marginBottom="8">
                    Product Page
                </Text>
            <FormLabel htmlFor='searchProduct' >Product Name</FormLabel>
            <Input id="searchProduct"  width="100%" size="md" onChange={inputHandler}></Input>
            <Flex justifyContent="center">
            <Button  marginTop={4} onClick={searchProduct}> Search</Button>

            </Flex>
            <Flex wrap="wrap" marginTop={5}  >
               {renderProduct()}
            </Flex>

            <Flex wrap="wrap" margin={5} justifyContent="center">
                <Button marginX={4} onClick={() => changePage("previous")}>Previous Page</Button>
                <Text>{currentPage} / {TotalPage}</Text>
                <Button marginX={4} onClick={() => changePage("next")}>Next Page</Button>
            </Flex>
            

        </Box>

       </Center>
       </>
    )
}

export default ProductPage