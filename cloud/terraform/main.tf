provider "aws" {
  region = "us-west-2"
}

resource "aws_lambda_function" "check_credit_score" {
  filename         = "lambda/checkCreditScore.zip"
  function_name    = "checkCreditScore"
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  role             = aws_iam_role.lambda_exec.arn
}

resource "aws_lambda_function" "check_loan_eligibility" {
  filename         = "lambda/checkLoanEligibility.zip"
  function_name    = "checkLoanEligibility"
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  role             = aws_iam_role.lambda_exec.arn
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}
