import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import { motion } from "framer-motion";
import { Box, Button, Center, Grid, Text } from "@chakra-ui/react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const fetchQuestions = async () => {
    try {
      const { data: questionsData, error } = await supabase
        .from("aksara")
        .select("*");

      if (error) {
        throw new Error(error.message);
      }

      
      const shuffledQuestions = shuffle(questionsData);
      setQuestions(shuffledQuestions);
      setCurrentQuestionIndex(0);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      const options = getOptions(currentQuestion);
      setOptions(options);
      setShowOptions(true);
    }
  }, [questions, currentQuestionIndex]);

  const getOptions = (question) => {
    const allLatinChars = questions.map((q) => q.aksara_latin);
    const options = [];
    const correctAnswer = question.aksara_latin;

    
    options.push(correctAnswer);

    
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * allLatinChars.length);
        const randomOption = allLatinChars[randomIndex];
        if (randomOption !== correctAnswer && !options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    
    const shuffledOptions = shuffle(options);
    return shuffledOptions;
};

  const handleAnswerSelection = (answer) => {
    setShowOptions(false);
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (answer === questions[currentQuestionIndex].aksara_latin) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setMistakes((prevMistakes) => prevMistakes + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer("");
        setShowFeedback(false);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    
    const id = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(id);
          setGameOver(true);
          return 0;
        }
      });
    }, 1000);
    setIntervalId(id);
    fetchQuestions(); 
  };

  const handleRestartGame = () => {
    clearInterval(intervalId);
    setTimeRemaining(60); 
    setScore(0);
    setMistakes(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
    fetchQuestions(); 
  };

  
  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    
    while (0 !== currentIndex) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <Box p={4}>
      {!gameStarted && !gameOver && (
        <Center>
          <Button onClick={handleStartGame} colorScheme="blue" size="lg">
            Mulai
          </Button>
        </Center>
      )}
      {gameStarted && !gameOver && (
        <Box>
          <Text fontSize="2xl" textAlign="center" mb={4}>
            Waktu Tersisa: {timeRemaining} detik
          </Text>
          {loading && <Text>Loading...</Text>}
          {!loading && questions.length > 0 && (
            <Box>
              <Text fontSize="xl" textAlign="center" mb={4}>
                Soal:
              </Text>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Box
                  maxW="md"
                  mx="auto"
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="md"
                  p="4"
                  textAlign="center"
                  mb="4"
                  bg="white"
                  color="gray.700"
                >
                  <Text fontSize="md" fontWeight="bold" mb="2">
                    Aksara Sunda:{" "}
                  </Text>
              
                  <h1
                  className="font-bold text-2xl"
                  style={{ fontSize: "5rem", display: "inline-block" }}
                >
                  {questions[currentQuestionIndex].aksara_sunda}
                </h1>
                </Box>
              </motion.div>
              <Text fontSize="xl" textAlign="center" mb={4}>
                Pilihan Jawaban:
              </Text>
              {showOptions && (
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  gap={6}
                  justifyContent="center"
                >
                  {options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Button
                        onClick={() => handleAnswerSelection(option)}
                        colorScheme="blue"
                        variant="outline"
                        w="100%"
                        borderRadius="md"
                        _hover={{ bg: "blue.200", color: "white" }}
                        _active={{
                          bg: "blue.300",
                          transform: "scale(0.95)",
                        }}
                      >
                        {option}
                      </Button>
                    </motion.div>
                  ))}
                </Grid>
              )}
              {showFeedback && (
                <Box textAlign="center" mt={4}>
                  {selectedAnswer ===
                  questions[currentQuestionIndex].aksara_latin ? (
                    <Text color="green.500" fontWeight="bold">
                      Jawaban benar!
                    </Text>
                  ) : (
                    <Text color="red.500" fontWeight="bold">
                      Jawaban salah.
                    </Text>
                  )}
                </Box>
              )}
            </Box>
          )}
          <Box textAlign="center" mt={4}>
            <Text fontWeight="bold">Skor: {score}</Text>
            <Text fontWeight="bold">Kesalahan: {mistakes}</Text>
          </Box>
        </Box>
      )}
      {gameOver && (
        <Center>
          <Box>
            <Text fontSize="2xl" textAlign="center" mb={4}>
              Waktu Habis!
            </Text>
            <Button
              onClick={handleRestartGame}
              colorScheme="blue"
              size="lg"
            >
              Main Ulang
            </Button>
          </Box>
        </Center>
      )}
    </Box>
  );
};

export default Quiz;
