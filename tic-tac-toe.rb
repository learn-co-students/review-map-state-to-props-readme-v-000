class Board
  @@board = ['-', '-', '-', '-', '-', '-', '-', '-', '-' ]

  def init()
  end

  def displayBoard
    puts @@board[0] + "|" + @@board[1] + "|" + @@board[2]
    puts @@board[3] + "|" + @@board[4] + "|" + @@board[5]
    puts @@board[6] + "|" + @@board[7] + "|" + @@board[8]
  end

  def addToken(token, position)
    @@board[position] = token
  end

  def checkFull?
    for x in @@board
      if x == 'X' || x == 'O'
        return true;
      else
        return false;
      end
    end
  end

  def validMove?(position)
    if @@board[position] == "-"
      return true;
    else
      return false;
    end
  end


  def makeMove
    if checkFull?
      raise "Board is full try again"
    else
      position = Random.new.rand(0..8)
      if validMove?(position)
        addToken('O', position);
      end
    end
  end


end

board = Board.new();
board.addToken('X', 1);
board.displayBoard();
puts board.checkFull?
